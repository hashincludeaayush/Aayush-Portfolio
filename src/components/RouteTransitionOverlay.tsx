"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { quotePacks } from "@/resources/routeOverlayContent";

type RouteTransitionOverlayProps = {
  /** Minimum time (ms) the overlay stays visible once shown */
  minDurationMs?: number;
  /** Safety timeout (ms) to auto-hide if navigation never completes */
  maxDurationMs?: number;
};

function isModifiedEvent(e: MouseEvent) {
  return e.metaKey || e.altKey || e.ctrlKey || e.shiftKey;
}

function findAnchor(target: EventTarget | null): HTMLAnchorElement | null {
  if (!(target instanceof Element)) return null;
  return target.closest("a") as HTMLAnchorElement | null;
}

function isSameOriginUrl(href: string) {
  try {
    const url = new URL(href, window.location.href);
    return url.origin === window.location.origin;
  } catch {
    return false;
  }
}

export function RouteTransitionOverlay({
  minDurationMs = 3000,
  maxDurationMs = 12000,
}: RouteTransitionOverlayProps) {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);
  const [flavor, setFlavor] = useState<{
    icon: string;
    line: string;
  } | null>(null);
  const startTimeRef = useRef<number>(0);
  const minDurationThisNavRef = useRef<number>(minDurationMs);
  const hideTimerRef = useRef<number | null>(null);
  const safetyTimerRef = useRef<number | null>(null);
  const prevPathnameRef = useRef<string | null>(null);

  const pick = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];

  const pickWeighted = <T extends { weight?: number }>(arr: T[]) => {
    if (!arr.length) throw new Error("pickWeighted called with empty array");
    const total = arr.reduce(
      (sum, item) => sum + Math.max(0, item.weight ?? 1),
      0,
    );
    if (total <= 0) return pick(arr);
    let r = Math.random() * total;
    for (const item of arr) {
      r -= Math.max(0, item.weight ?? 1);
      if (r <= 0) return item;
    }
    return arr[arr.length - 1];
  };

  const clearTimers = useCallback(() => {
    if (hideTimerRef.current) window.clearTimeout(hideTimerRef.current);
    if (safetyTimerRef.current) window.clearTimeout(safetyTimerRef.current);
    hideTimerRef.current = null;
    safetyTimerRef.current = null;
  }, []);

  const begin = useCallback(() => {
    // If already active, don’t restart timers.
    if (active) return;

    // Pick a new flavor for this navigation.
    const pack = quotePacks.length ? pickWeighted(quotePacks) : null;
    const packIcons = pack?.icons?.length ? pack.icons : ["✦"];
    const packLines = pack?.lines?.length ? pack.lines : ["Loading…"];

    setFlavor({
      icon: pick(packIcons),
      line: pick(packLines),
    });

    clearTimers();
    startTimeRef.current = performance.now();
    // Keep the overlay visible ~4–5s by default (randomized per navigation).
    // If a minDurationMs prop is explicitly provided (non-default), we honor it.
    minDurationThisNavRef.current =
      minDurationMs === 3000
        ? 4000 + Math.random() * 1000
        : Math.max(0, minDurationMs);
    setFadingOut(false);
    setActive(true);

    // Safety auto-hide (in case navigation is cancelled)
    safetyTimerRef.current = window.setTimeout(() => {
      setFadingOut(true);
      window.setTimeout(() => setActive(false), 220);
    }, maxDurationMs);
  }, [active, clearTimers, maxDurationMs]);

  const finish = useCallback(() => {
    if (!active) return;

    clearTimers();

    const elapsed = performance.now() - startTimeRef.current;
    const wait = Math.max(0, minDurationThisNavRef.current - elapsed);

    hideTimerRef.current = window.setTimeout(() => {
      setFadingOut(true);
      window.setTimeout(() => setActive(false), 220);
    }, wait);
  }, [active, clearTimers]);

  // Start overlay on in-app navigations (clicks)
  useEffect(() => {
    const onClickCapture = (e: MouseEvent) => {
      if (e.defaultPrevented) return;
      if (e.button !== 0) return;
      if (isModifiedEvent(e)) return;

      const a = findAnchor(e.target);
      if (!a) return;
      if (a.target && a.target !== "_self") return;
      if (a.hasAttribute("download")) return;

      const href = a.getAttribute("href") || "";
      if (!href) return;
      if (href.startsWith("#")) return;
      if (href.startsWith("mailto:") || href.startsWith("tel:")) return;

      // Ignore external links
      const absoluteHref = a.href || href;
      if (!isSameOriginUrl(absoluteHref)) return;

      // Ignore same-path navigations
      try {
        const url = new URL(absoluteHref, window.location.href);
        if (
          url.pathname === window.location.pathname &&
          url.search === window.location.search
        )
          return;
      } catch {
        // continue
      }

      begin();
    };

    const onPopState = () => {
      begin();
    };

    document.addEventListener("click", onClickCapture, true);
    window.addEventListener("popstate", onPopState);

    return () => {
      document.removeEventListener("click", onClickCapture, true);
      window.removeEventListener("popstate", onPopState);
    };
  }, [begin]);

  // Finish overlay when pathname updates (navigation completed)
  useEffect(() => {
    if (!pathname) return;

    if (prevPathnameRef.current === null) {
      prevPathnameRef.current = pathname;
      return;
    }

    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      finish();
    }
  }, [pathname, finish]);

  // Cleanup
  useEffect(() => () => clearTimers(), [clearTimers]);

  if (!active) return null;

  return (
    <div
      className={`routeOverlay ${fadingOut ? "isFading" : ""}`}
      aria-hidden="true"
    >
      <div className="routeOverlayInner">
        <div className="routeOverlayBadge" aria-hidden="true">
          <span className="routeOverlayIcon">{flavor?.icon ?? "✦"}</span>
          <span className="routeOverlayBadgeText">Loading</span>
        </div>

        <div className="routeSpinner" />

        <div className="routeOverlayText">{flavor?.line ?? "Loading…"}</div>

        <div className="routeOverlayLoaderCard" aria-hidden="true">
          <div className="routeOverlaySkeletonAvatar" />
          <div className="routeOverlaySkeletonBody">
            <div className="routeOverlaySkeletonLine isLong" />
            <div className="routeOverlaySkeletonLine" />
            <div className="routeOverlaySkeletonLine isShort" />
          </div>
        </div>
      </div>
      <div className="routeOverlayTopBar" />
    </div>
  );
}
