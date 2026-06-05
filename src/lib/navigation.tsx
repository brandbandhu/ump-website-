import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  to: string;
  params?: Record<string, string>;
  activeProps?: { className?: string };
  activeOptions?: { exact?: boolean };
  children: ReactNode;
};

export function buildPath(to: string, params?: Record<string, string>) {
  let path = to;
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      path = path.replace(`$${key}`, encodeURIComponent(value));
    }
  }
  return path.replace(/\/$/, "") || "/";
}

export function navigate(to: string) {
  if (window.location.pathname === to) return;
  window.history.pushState({}, "", to);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0, behavior: "instant" });
}

export function Link({
  to,
  params,
  activeProps,
  activeOptions,
  className,
  onClick,
  children,
  ...props
}: LinkProps) {
  const href = buildPath(to, params);
  const currentPath = typeof window === "undefined" ? "" : window.location.pathname;
  const isActive = activeOptions?.exact
    ? currentPath === href
    : currentPath === href || currentPath.startsWith(`${href}/`);
  const mergedClassName = [className, isActive ? activeProps?.className : ""]
    .filter(Boolean)
    .join(" ");

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey ||
      props.target
    ) {
      return;
    }

    event.preventDefault();
    navigate(href);
  };

  return (
    <a href={href} className={mergedClassName} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
