"use client";

import React, { useEffect, useRef, useState } from "react";

type RouteLoadingIndicatorProps = {
  active: boolean;
};

export function RouteLoadingIndicator({ active }: RouteLoadingIndicatorProps) {
  // Superseded by the full-page RouteTransitionOverlay.
  // Kept for compatibility with existing imports.
  void active;
  return null;
}
