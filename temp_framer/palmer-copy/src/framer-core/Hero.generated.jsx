// http-url:https://framerusercontent.com/modules/kLwsvOXcxpnqfVX8XTY1/KprNIId490qwKYHmPRdn/unsgSXGX8.js
import { jsx as _jsx6, jsxs as _jsxs4 } from "react/jsx-runtime";
import { addFonts as addFonts4, addPropertyControls as addPropertyControls6, ComponentViewportProvider as ComponentViewportProvider2, ControlType as ControlType9, cx as cx4, forwardLoader, getFonts as getFonts2, getFontsFromSharedStyle as getFontsFromSharedStyle2, RichText as RichText3, SmartComponentScopedContainer as SmartComponentScopedContainer2, useActiveVariantCallback as useActiveVariantCallback3, useComponentViewport as useComponentViewport4, useLocaleInfo as useLocaleInfo4, useVariantState as useVariantState4, withCSS as withCSS4, withFX as withFX2, withOptimizedAppearEffect as withOptimizedAppearEffect2 } from "./framer.js";
import { LayoutGroup as LayoutGroup4, motion as motion4, MotionConfigContext as MotionConfigContext4 } from "./framer.js";
import * as React7 from "react";
import { useRef as useRef8 } from "react";

// Extracted SVG assets
const __svg_1 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 28 28\"><g><path d=\"M 0 0 L 28 0 L 28 28 L 0 28 Z\" fill=\"transparent\"></path><path d=\"M 21 7.113 C 21 7.041 21.029 6.971 21.079 6.921 L 27.534 0.465 C 27.613 0.388 27.73 0.365 27.831 0.407 C 27.933 0.449 28 0.548 28 0.658 L 28 13.888 C 28 13.96 27.971 14.028 27.921 14.079 L 21 21 Z M 7 21 L 7 7.658 C 7 7.548 6.933 7.449 6.831 7.407 C 6.73 7.365 6.613 7.388 6.534 7.465 L 0.079 13.921 C 0.028 13.972 0 14.041 0 14.113 L 0 27.728 C 0 27.877 0.122 28 0.273 28 L 13.888 28 C 13.96 28 14.028 27.971 14.079 27.921 L 21 21 Z\" fill=\"rgb(153, 102, 255)\"></path></g></svg>";


// http-url:https://framerusercontent.com/modules/5iVhojCo17A7sAu0ue9z/3p022q4zKyFZzP7h8LHR/Hover3D_Prod.js
import { jsx as _jsx2 } from "react/jsx-runtime";
import * as React2 from "react";
import { addPropertyControls as addPropertyControls2, ControlType as ControlType2 } from "./framer.js";
import { useMotionValue } from "./framer.js";

// http-url:https://framerusercontent.com/modules/fMDE7Cqb2uOvQFAHEP2m/DE91ZNrPshQbFJysFrO4/W7oLCU4_B.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, RichText, SVG, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "./framer.js";
import { LayoutGroup, motion, MotionConfigContext } from "./framer.js";
import * as React from "react";
import { useRef } from "react";
var serializationHash = "framer-ZpfHZ";
var variantClassNames = {
  XvqTw0Be9: "framer-v-jjcw9a"
};
var transition1 = {
  bounce: 0.2,
  delay: 0,
  duration: 0.4,
  type: "spring"
};
var Transition = ({
  value,
  children
}) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({
    ...config,
    transition
  }), [JSON.stringify(transition)]);
  return <MotionConfigContext.Provider value={contextValue}>{children}</MotionConfigContext.Provider>;
};
var Variants = motion.create(React.Fragment);
var getProps = ({
  height,
  id,
  subtitle,
  title,
  width,
  ...props
}) => {
  return {
    ...props,
    WuF2iG84P: subtitle ?? props.WuF2iG84P ?? "Set up the component by adding background and bouncer elements to the component properties.",
    yeAnKbEUZ: title ?? props.yeAnKbEUZ ?? "Screen Saver"
  };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = React.forwardRef(function (props, ref) {
  const fallbackRef = useRef(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React.useId();
  const {
    activeLocale,
    setLocale
  } = useLocaleInfo();
  const componentViewport = useComponentViewport();
  const {
    style,
    className: className3,
    layoutId,
    variant,
    yeAnKbEUZ,
    WuF2iG84P,
    ...restProps
  } = getProps(props);
  const {
    baseVariant,
    classNames,
    clearLoadingGesture,
    gestureHandlers,
    gestureVariant,
    isLoading,
    setGestureState,
    setVariant,
    variants
  } = useVariantState({
    defaultVariant: "XvqTw0Be9",
    ref: refBinding,
    variant,
    variantClassNames
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return <LayoutGroup id={layoutId ?? defaultLayoutId}>{<Variants animate={variants} initial={false}>{<Transition value={transition1}>{_jsx(motion.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx(scopingClassNames, "framer-jjcw9a", className3, classNames),
          "data-framer-name": "Default",
          layoutDependency,
          layoutId: "XvqTw0Be9",
          ref: refBinding,
          style: {
            backgroundColor: "rgba(136, 85, 255, 0.1)",
            ...style
          },
          children: _jsxs(motion.div, {
            className: "framer-uh2i08",
            layoutDependency,
            layoutId: "aM7oiNoFL",
            children: [<SVG className="framer-flw0dh" data-framer-name="Logo" layout="position" layoutDependency={layoutDependency} layoutId="GthLmGmBt" opacity={1} svg={__svg_1} svgContentId={11036020200} withExternalLayout />, _jsxs(motion.div, {
              className: "framer-k3ullq",
              layoutDependency,
              layoutId: "E3DQBYSAf",
              children: [<RichText __fromCanvasComponent className="framer-q0gs4u" data-framer-name="Title" fonts={["Inter-Bold"]} layoutDependency={layoutDependency} layoutId="UqJwZqJjg" style={{
                "--extracted-r6o4lv": "rgb(153, 102, 255)",
                "--framer-link-text-color": "rgb(0, 153, 255)",
                "--framer-link-text-decoration": "underline"
              }} text={yeAnKbEUZ} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.p, {
                    style: {
                      "--font-selector": "SW50ZXItQm9sZA==",
                      "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                      "--framer-font-size": "11px",
                      "--framer-font-weight": "700",
                      "--framer-letter-spacing": "-0.02em",
                      "--framer-line-height": "1em",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, rgb(153, 102, 255))"
                    },
                    children: "Screen Saver"
                  })}</>}</RichText>, <RichText __fromCanvasComponent className="framer-g5dqhc" data-framer-name="Subtitle" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="RJ7UF99m8" style={{
                "--extracted-r6o4lv": "rgba(153, 102, 255, 0.7)",
                "--framer-link-text-color": "rgb(0, 153, 255)",
                "--framer-link-text-decoration": "underline"
              }} text={WuF2iG84P} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.p, {
                    style: {
                      "--framer-font-size": "11px",
                      "--framer-letter-spacing": "-0.03em",
                      "--framer-line-height": "1.4em",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, rgba(153, 102, 255, 0.7))"
                    },
                    children: "Set up the component by adding background and bouncer elements to the component properties."
                  })}</>}</RichText>]
            })]
          })
        })}</Transition>}</Variants>}</LayoutGroup>;
});
var css = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-ZpfHZ.framer-qanqo2, .framer-ZpfHZ .framer-qanqo2 { display: block; }", ".framer-ZpfHZ.framer-jjcw9a { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 200px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 400px; }", ".framer-ZpfHZ .framer-uh2i08 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 20px 0px 20px; position: relative; width: 1px; }", ".framer-ZpfHZ .framer-flw0dh { flex: none; height: 28px; position: relative; width: 28px; }", ".framer-ZpfHZ .framer-k3ullq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; max-width: 200px; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-ZpfHZ .framer-q0gs4u, .framer-ZpfHZ .framer-g5dqhc { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }"];
var FramerW7oLCU4_B = withCSS(Component, css, "framer-ZpfHZ");
var W7oLCU4_B_default = FramerW7oLCU4_B;
FramerW7oLCU4_B.displayName = "Utils/Component Message";
FramerW7oLCU4_B.defaultProps = {
  height: 200,
  width: 400
};
addPropertyControls(FramerW7oLCU4_B, {
  yeAnKbEUZ: {
    defaultValue: "Screen Saver",
    displayTextArea: false,
    title: "Title",
    type: ControlType.String
  },
  WuF2iG84P: {
    defaultValue: "Set up the component by adding background and bouncer elements to the component properties.",
    displayTextArea: false,
    title: "Subtitle",
    type: ControlType.String
  }
});
addFonts(FramerW7oLCU4_B, [{
  explicitInter: true,
  fonts: [{
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
    url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2",
    weight: "700"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2",
    weight: "700"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+1F00-1FFF",
    url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2",
    weight: "700"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0370-03FF",
    url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2",
    weight: "700"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
    url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2",
    weight: "700"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    url: "https://framerusercontent.com/assets/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2",
    weight: "700"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
    url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2",
    weight: "700"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
    url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+1F00-1FFF",
    url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0370-03FF",
    url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
    url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
    url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
    weight: "400"
  }]
}], {
  supportsExplicitInterCodegen: true
});

// http-url:https://framerusercontent.com/modules/5iVhojCo17A7sAu0ue9z/3p022q4zKyFZzP7h8LHR/Hover3D_Prod.js
function Hover3D(props) {
  const ref = React2.useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  React2.useEffect(() => {
    if (ref.current) {
      ref.current.style.transform = `perspective(${props.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    }
  }, [props.perspective]);
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  const handleMouseMove = React2.useCallback(debounce(e => {
    const {
      width,
      height,
      top,
      left
    } = ref.current.getBoundingClientRect();
    const multiplier = props.effect === "evade" ? -1 : 1;
    const tiltX = ((e.clientY - top) / height - 0.5) * (props.tiltLimit * 2) * multiplier;
    const tiltY = ((e.clientX - left) / width - 0.5) * -(props.tiltLimit * 2) * multiplier;
    rotateX.set(tiltX);
    rotateY.set(tiltY);
    ref.current.style.transform = `perspective(${props.perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(${props.scale}, ${props.scale}, ${props.scale})`;
  }, 2), [props.tiltLimit, props.scale, props.perspective, props.effect]);
  const handleMouseLeave = () => {
    if (ref.current) {
      rotateX.set(0);
      rotateY.set(0);
      ref.current.style.transform = `perspective(${props.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    }
  };
  if (React2.Children.count(props.children) === 0) {
    return <W7oLCU4_B_default title="3D Hover Component" subtitle="Connect a frame to the component." style={{
      ...props.style
    }} />;
  }
  return <div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{
    width: "100%",
    height: "100%",
    transition: "transform 0.2s ease-out",
    position: "relative",
    overflow: "visible",
    borderRadius: props.borderRadius,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    willChange: "transform"
  }}>{props.children}</div>;
}
Hover3D.displayName = "3D Hover";
Hover3D.defaultProps = {
  tiltLimit: 15,
  effect: "evade",
  scale: 1.1,
  perspective: 500,
  borderRadius: 0
};
addPropertyControls2(Hover3D, {
  children: {
    type: ControlType2.ComponentInstance,
    title: "Frame"
  },
  effect: {
    type: ControlType2.Enum,
    title: "Effect",
    options: ["gravitate", "evade"],
    optionTitles: ["Gravitate", "Evade"],
    defaultValue: "evade",
    displaySegmentedControl: true
  },
  tiltLimit: {
    type: ControlType2.Number,
    title: "Tilt Limit",
    min: 1,
    max: 100,
    step: 1,
    defaultValue: 15,
    displayStepper: true
  },
  scale: {
    type: ControlType2.Number,
    title: "Scale",
    min: 1,
    max: 10,
    step: 0.1,
    defaultValue: 1.1,
    displayStepper: true
  },
  perspective: {
    type: ControlType2.Number,
    title: "Perspective",
    min: 500,
    max: 5e3,
    step: 10,
    defaultValue: 500
  },
  borderRadius: {
    type: ControlType2.Number,
    title: "Radius",
    min: 0,
    max: 1e3,
    step: 1,
    defaultValue: 0,
    displayStepper: true,
    description: "More components at [Framer University](https://frameruni.link/cc)."
  }
});

// http-url:https://framerusercontent.com/modules/98iKxF0tUpiPHkBFEF4x/gWTvoT9aeC1300Pjbwp9/bLxN69a46.js
import { fontStore } from "./framer.js";
fontStore.loadFonts(["FR;InterDisplay-Medium", "FR;InterDisplay-Bold", "FR;InterDisplay-BoldItalic", "FR;InterDisplay-MediumItalic"]);
var fonts = [{
  explicitInter: true,
  fonts: [{
    family: "Inter Display",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
    url: "https://framerusercontent.com/assets/ePuN3mCjzajIHnyCdvKBFiZkyY0.woff2",
    weight: "500"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    url: "https://framerusercontent.com/assets/V3j1L0o5vPFKe26Sw4HcpXCfHo.woff2",
    weight: "500"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "normal",
    unicodeRange: "U+1F00-1FFF",
    url: "https://framerusercontent.com/assets/F3kdpd2N0cToWV5huaZjjgM.woff2",
    weight: "500"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0370-03FF",
    url: "https://framerusercontent.com/assets/0iDmxkizU9goZoclqIqsV5rvETU.woff2",
    weight: "500"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
    url: "https://framerusercontent.com/assets/r0mv3NegmA0akcQsNFotG32Las.woff2",
    weight: "500"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    url: "https://framerusercontent.com/assets/8yoV9pUxquX7VD7ZXlNYKQmkmk.woff2",
    weight: "500"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
    url: "https://framerusercontent.com/assets/Ii21jnSJkulBKsHHXKlapi7fv9w.woff2",
    weight: "500"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
    url: "https://framerusercontent.com/assets/I11LrmuBDQZweplJ62KkVsklU5Y.woff2",
    weight: "700"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    url: "https://framerusercontent.com/assets/UjFZPDy3qGuDktQM4q9CxhKfIa8.woff2",
    weight: "700"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "normal",
    unicodeRange: "U+1F00-1FFF",
    url: "https://framerusercontent.com/assets/8exwVHJy2DhJ4N5prYlVMrEKmQ.woff2",
    weight: "700"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0370-03FF",
    url: "https://framerusercontent.com/assets/UTeedEK21hO5jDxEUldzdScUqpg.woff2",
    weight: "700"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
    url: "https://framerusercontent.com/assets/Ig8B8nzy11hzIWEIYnkg91sofjo.woff2",
    weight: "700"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    url: "https://framerusercontent.com/assets/n9CXKI3tsmCPeC6MCT9NziShSuQ.woff2",
    weight: "700"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
    url: "https://framerusercontent.com/assets/qctQFoJqJ9aIbRSIp0AhCQpFxn8.woff2",
    weight: "700"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "italic",
    unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
    url: "https://framerusercontent.com/assets/fXvVh2JeZlehNcEhKHpHH0frSl0.woff2",
    weight: "700"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "italic",
    unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    url: "https://framerusercontent.com/assets/7pScaNeb6M7n2HF2jKemDqzCIr4.woff2",
    weight: "700"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "italic",
    unicodeRange: "U+1F00-1FFF",
    url: "https://framerusercontent.com/assets/qS4UjQYyATcVV9rODk0Zx9KhkY8.woff2",
    weight: "700"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "italic",
    unicodeRange: "U+0370-03FF",
    url: "https://framerusercontent.com/assets/VfD2n20yM7v0hrUEBHEyafsmMBY.woff2",
    weight: "700"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "italic",
    unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
    url: "https://framerusercontent.com/assets/4oIO9fB59bn3cKFWz7piCj28z9s.woff2",
    weight: "700"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "italic",
    unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    url: "https://framerusercontent.com/assets/TBccIZR9kIpkRce5i9ATfPp7a4.woff2",
    weight: "700"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "italic",
    unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
    url: "https://framerusercontent.com/assets/F5Lmfd3fCAu7TwiYbI4DLWw4ks.woff2",
    weight: "700"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "italic",
    unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
    url: "https://framerusercontent.com/assets/A5P4nkYCJlLQxGxaS1lzG8PNSc.woff2",
    weight: "500"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "italic",
    unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    url: "https://framerusercontent.com/assets/vuPfygr1n1zYxscvWgGI8hRf3LE.woff2",
    weight: "500"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "italic",
    unicodeRange: "U+1F00-1FFF",
    url: "https://framerusercontent.com/assets/jplzYzqFHXreyADwk9yrkQlWQ.woff2",
    weight: "500"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "italic",
    unicodeRange: "U+0370-03FF",
    url: "https://framerusercontent.com/assets/sSIKP2TfVPvfK7YVENPE5H87A.woff2",
    weight: "500"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "italic",
    unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
    url: "https://framerusercontent.com/assets/gawbeo7iEJSRZ4kcrh6YRrU8o.woff2",
    weight: "500"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "italic",
    unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    url: "https://framerusercontent.com/assets/xSzma7KIWAdctStaX171ey3lams.woff2",
    weight: "500"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "italic",
    unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
    url: "https://framerusercontent.com/assets/8E92vrr3j1gDqzepmeSbD2u0JxA.woff2",
    weight: "500"
  }]
}];
var css2 = [`.framer-5HwXn .framer-styles-preset-sng7in:not(.rich-text-wrapper), .framer-5HwXn .framer-styles-preset-sng7in.rich-text-wrapper h3 { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: 'ss02' on, 'ss03' on, 'ss07' on, 'cv06' on, 'cv05' on, 'cv08' on, 'cv10' on, 'cv12' on, 'cv04' on, 'cv03' on, 'cv02' on, 'cv01' on, 'cv13' on; --framer-font-size: 49px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.8px; --framer-line-height: 50.6px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`, `@media (max-width: 1439px) and (min-width: 1200px) { .framer-5HwXn .framer-styles-preset-sng7in:not(.rich-text-wrapper), .framer-5HwXn .framer-styles-preset-sng7in.rich-text-wrapper h3 { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: 'ss02' on, 'ss03' on, 'ss07' on, 'cv06' on, 'cv05' on, 'cv08' on, 'cv10' on, 'cv12' on, 'cv04' on, 'cv03' on, 'cv02' on, 'cv01' on, 'cv13' on; --framer-font-size: 49px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.8px; --framer-line-height: 50.6px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`, `@media (max-width: 1199px) and (min-width: 810px) { .framer-5HwXn .framer-styles-preset-sng7in:not(.rich-text-wrapper), .framer-5HwXn .framer-styles-preset-sng7in.rich-text-wrapper h3 { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: 'ss02' on, 'ss03' on, 'ss07' on, 'cv06' on, 'cv05' on, 'cv08' on, 'cv10' on, 'cv12' on, 'cv04' on, 'cv03' on, 'cv02' on, 'cv01' on, 'cv13' on; --framer-font-size: 31px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.8px; --framer-line-height: 33.6px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`, `@media (max-width: 809px) and (min-width: 0px) { .framer-5HwXn .framer-styles-preset-sng7in:not(.rich-text-wrapper), .framer-5HwXn .framer-styles-preset-sng7in.rich-text-wrapper h3 { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: 'ss02' on, 'ss03' on, 'ss07' on, 'cv06' on, 'cv05' on, 'cv08' on, 'cv10' on, 'cv12' on, 'cv04' on, 'cv03' on, 'cv02' on, 'cv01' on, 'cv13' on; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.8px; --framer-line-height: 24.6px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`];
var className = "framer-5HwXn";

// http-url:https://framerusercontent.com/modules/bRrg7SF79EEJgXr6w3Zo/4lE6LclmaJryHarVOjjg/Kyg61OlWr.js
import { jsx as _jsx3, jsxs as _jsxs2 } from "react/jsx-runtime";
import { addFonts as addFonts2, addPropertyControls as addPropertyControls3, ControlType as ControlType3, cx as cx2, getFontsFromSharedStyle, RichText as RichText2, useActiveVariantCallback, useComponentViewport as useComponentViewport2, useLocaleInfo as useLocaleInfo2, useOnVariantChange, useVariantState as useVariantState2, withCSS as withCSS2, withFX, withOptimizedAppearEffect } from "./framer.js";
import { LayoutGroup as LayoutGroup2, motion as motion2, MotionConfigContext as MotionConfigContext2 } from "./framer.js";
import * as React3 from "react";
import { useRef as useRef3 } from "react";

// http-url:https://framerusercontent.com/modules/GThmMkiiwWATZDFpzzh6/yI2A1phDWintCs2qPDqM/eqDmnbQxL.js
import { fontStore as fontStore2 } from "./framer.js";
fontStore2.loadFonts(["FR;InterDisplay-SemiBold", "FR;InterDisplay-Bold", "FR;InterDisplay-BoldItalic", "FR;InterDisplay-SemiBoldItalic"]);
var fonts2 = [{
  explicitInter: true,
  fonts: [{
    family: "Inter Display",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
    url: "https://framerusercontent.com/assets/gazZKZuUEtvr9ULhdA4SprP0AZ0.woff2",
    weight: "600"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    url: "https://framerusercontent.com/assets/pe8RoujoPxuTZhqoNzYqHX2MXA.woff2",
    weight: "600"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "normal",
    unicodeRange: "U+1F00-1FFF",
    url: "https://framerusercontent.com/assets/teGhWnhH3bCqefKGsIsqFy3hK8.woff2",
    weight: "600"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0370-03FF",
    url: "https://framerusercontent.com/assets/qQHxgTnEk6Czu1yW4xS82HQWFOk.woff2",
    weight: "600"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
    url: "https://framerusercontent.com/assets/MJ3N6lfN4iP5Um8rJGqLYl03tE.woff2",
    weight: "600"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    url: "https://framerusercontent.com/assets/dHHUz45rhM2KCQpj9zttNVlibk.woff2",
    weight: "600"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
    url: "https://framerusercontent.com/assets/0SEEmmWc3vovhaai4RlRQSWRrz0.woff2",
    weight: "600"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
    url: "https://framerusercontent.com/assets/I11LrmuBDQZweplJ62KkVsklU5Y.woff2",
    weight: "700"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    url: "https://framerusercontent.com/assets/UjFZPDy3qGuDktQM4q9CxhKfIa8.woff2",
    weight: "700"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "normal",
    unicodeRange: "U+1F00-1FFF",
    url: "https://framerusercontent.com/assets/8exwVHJy2DhJ4N5prYlVMrEKmQ.woff2",
    weight: "700"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0370-03FF",
    url: "https://framerusercontent.com/assets/UTeedEK21hO5jDxEUldzdScUqpg.woff2",
    weight: "700"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
    url: "https://framerusercontent.com/assets/Ig8B8nzy11hzIWEIYnkg91sofjo.woff2",
    weight: "700"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    url: "https://framerusercontent.com/assets/n9CXKI3tsmCPeC6MCT9NziShSuQ.woff2",
    weight: "700"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
    url: "https://framerusercontent.com/assets/qctQFoJqJ9aIbRSIp0AhCQpFxn8.woff2",
    weight: "700"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "italic",
    unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
    url: "https://framerusercontent.com/assets/fXvVh2JeZlehNcEhKHpHH0frSl0.woff2",
    weight: "700"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "italic",
    unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    url: "https://framerusercontent.com/assets/7pScaNeb6M7n2HF2jKemDqzCIr4.woff2",
    weight: "700"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "italic",
    unicodeRange: "U+1F00-1FFF",
    url: "https://framerusercontent.com/assets/qS4UjQYyATcVV9rODk0Zx9KhkY8.woff2",
    weight: "700"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "italic",
    unicodeRange: "U+0370-03FF",
    url: "https://framerusercontent.com/assets/VfD2n20yM7v0hrUEBHEyafsmMBY.woff2",
    weight: "700"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "italic",
    unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
    url: "https://framerusercontent.com/assets/4oIO9fB59bn3cKFWz7piCj28z9s.woff2",
    weight: "700"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "italic",
    unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    url: "https://framerusercontent.com/assets/TBccIZR9kIpkRce5i9ATfPp7a4.woff2",
    weight: "700"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "italic",
    unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
    url: "https://framerusercontent.com/assets/F5Lmfd3fCAu7TwiYbI4DLWw4ks.woff2",
    weight: "700"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "italic",
    unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
    url: "https://framerusercontent.com/assets/KKQXBq6BF0xEmVbrTnWxh3Yw.woff2",
    weight: "600"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "italic",
    unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    url: "https://framerusercontent.com/assets/ugFYeIKZEJXDxI6Kh0YQUX6EK9I.woff2",
    weight: "600"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "italic",
    unicodeRange: "U+1F00-1FFF",
    url: "https://framerusercontent.com/assets/DgDysCLt0HkIpWMu2uN5tivgQ.woff2",
    weight: "600"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "italic",
    unicodeRange: "U+0370-03FF",
    url: "https://framerusercontent.com/assets/2yEyxokC6poTg3Uc5E2ogfVi6WE.woff2",
    weight: "600"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "italic",
    unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
    url: "https://framerusercontent.com/assets/wmHLUqO4QxLaADUScavxvknnBQ.woff2",
    weight: "600"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "italic",
    unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    url: "https://framerusercontent.com/assets/08bCJfmvizuFi36VeazboYh54CQ.woff2",
    weight: "600"
  }, {
    family: "Inter Display",
    source: "framer",
    style: "italic",
    unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
    url: "https://framerusercontent.com/assets/DuYGXsyDXsSnxlZ8qzmcA4x3JiI.woff2",
    weight: "600"
  }]
}];
var css3 = ['.framer-kdUcE .framer-styles-preset-izlnn8:not(.rich-text-wrapper), .framer-kdUcE .framer-styles-preset-izlnn8.rich-text-wrapper p { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: 0px; --framer-line-height: 24px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }'];
var className2 = "framer-kdUcE";

// http-url:https://framerusercontent.com/modules/bRrg7SF79EEJgXr6w3Zo/4lE6LclmaJryHarVOjjg/Kyg61OlWr.js
var RichTextWithFXWithOptimizedAppearEffect = withOptimizedAppearEffect(withFX(RichText2));
var cycleOrder = ["p6MHOXaId", "yQnSBc9qa"];
var serializationHash2 = "framer-HEDEE";
var variantClassNames2 = {
  p6MHOXaId: "framer-v-xlotgl",
  yQnSBc9qa: "framer-v-1rbv0do"
};
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach(variant => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition12 = {
  damping: 60,
  delay: 0,
  mass: 1,
  stiffness: 300,
  type: "spring"
};
var transition2 = {
  bounce: 0.2,
  delay: 0.1,
  duration: 0.4,
  type: "spring"
};
var animation = {
  opacity: 1,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  transition: transition2,
  x: 0,
  y: 0
};
var animation1 = {
  opacity: 1,
  rotate: 0,
  rotateX: 90,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  x: 0,
  y: 0
};
var Transition2 = ({
  value,
  children
}) => {
  const config = React3.useContext(MotionConfigContext2);
  const transition = value ?? config.transition;
  const contextValue = React3.useMemo(() => ({
    ...config,
    transition
  }), [JSON.stringify(transition)]);
  return <MotionConfigContext2.Provider value={contextValue}>{children}</MotionConfigContext2.Provider>;
};
var Variants2 = motion2.create(React3.Fragment);
var humanReadableVariantMap = {
  Appear: "yQnSBc9qa",
  Normal: "p6MHOXaId"
};
var getProps2 = ({
  height,
  id,
  title1,
  title2,
  title3,
  title4,
  width,
  ...props
}) => {
  return {
    ...props,
    DTbD9rT1W: title3 ?? props.DTbD9rT1W ?? "Strategy",
    L7I1r5V52: title2 ?? props.L7I1r5V52 ?? "Branding",
    UVsRBS2xZ: title4 ?? props.UVsRBS2xZ ?? "Web Design",
    variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "p6MHOXaId",
    Y0AFFcDc9: title1 ?? props.Y0AFFcDc9 ?? "Art Direction"
  };
};
var createLayoutDependency2 = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component2 = React3.forwardRef(function (props, ref) {
  const fallbackRef = useRef3(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React3.useId();
  const {
    activeLocale,
    setLocale
  } = useLocaleInfo2();
  const componentViewport = useComponentViewport2();
  const {
    style,
    className: className3,
    layoutId,
    variant,
    Y0AFFcDc9,
    L7I1r5V52,
    DTbD9rT1W,
    UVsRBS2xZ,
    ...restProps
  } = getProps2(props);
  const {
    baseVariant,
    classNames,
    clearLoadingGesture,
    gestureHandlers,
    gestureVariant,
    isLoading,
    setGestureState,
    setVariant,
    variants
  } = useVariantState2({
    cycleOrder,
    defaultVariant: "p6MHOXaId",
    ref: refBinding,
    variant,
    variantClassNames: variantClassNames2
  });
  const layoutDependency = createLayoutDependency2(props, variants);
  const {
    activeVariantCallback,
    delay
  } = useActiveVariantCallback(baseVariant);
  const onAppeargdri2 = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("yQnSBc9qa"), 4400);
  });
  useOnVariantChange(baseVariant, {
    default: onAppeargdri2
  });
  const sharedStyleClassNames = [className2];
  const scopingClassNames = cx2(serializationHash2, ...sharedStyleClassNames);
  return <LayoutGroup2 id={layoutId ?? defaultLayoutId}>{<Variants2 animate={variants} initial={false}>{<Transition2 value={transition12}>{_jsxs2(motion2.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx2(scopingClassNames, "framer-xlotgl", className3, classNames),
          "data-framer-name": "Normal",
          "data-highlight": true,
          layoutDependency,
          layoutId: "p6MHOXaId",
          ref: refBinding,
          style: {
            ...style
          },
          ...addPropertyOverrides({
            yQnSBc9qa: {
              "data-framer-name": "Appear"
            }
          }, baseVariant, gestureVariant),
          children: [_jsx3(motion2.div, {
            className: "framer-u73k71",
            "data-framer-name": "BG",
            layoutDependency,
            layoutId: "iwHtwVKD0",
            style: {
              backgroundColor: "var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))",
              opacity: 0
            },
            variants: {
              yQnSBc9qa: {
                opacity: 1
              }
            }
          }), <RichTextWithFXWithOptimizedAppearEffect __fromCanvasComponent className="framer-1602xft" data-framer-appear-id="1602xft" data-framer-name="Text 1" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="aY_Xk3vyV" style={{
            "--framer-paragraph-spacing": "0px"
          }} text={Y0AFFcDc9} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
            yQnSBc9qa: {
              __perspectiveFX: false,
              __smartComponentFX: true,
              __targetOpacity: 1,
              animate: animation,
              initial: animation1,
              optimized: true
            }
          }, baseVariant, gestureVariant)}>{<React3.Fragment>{_jsx3(motion2.p, {
                className: "framer-styles-preset-izlnn8",
                "data-styles-preset": "eqDmnbQxL",
                children: "Art Direction"
              })}</React3.Fragment>}</RichTextWithFXWithOptimizedAppearEffect>, <RichTextWithFXWithOptimizedAppearEffect __fromCanvasComponent className="framer-1qj1b6h" data-framer-appear-id="1qj1b6h" data-framer-name="Text 2" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="PJPUjepfJ" style={{
            "--framer-paragraph-spacing": "0px"
          }} text={L7I1r5V52} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
            yQnSBc9qa: {
              __perspectiveFX: false,
              __smartComponentFX: true,
              __targetOpacity: 1,
              animate: animation,
              initial: animation1,
              optimized: true
            }
          }, baseVariant, gestureVariant)}>{<React3.Fragment>{_jsx3(motion2.p, {
                className: "framer-styles-preset-izlnn8",
                "data-styles-preset": "eqDmnbQxL",
                children: "Branding"
              })}</React3.Fragment>}</RichTextWithFXWithOptimizedAppearEffect>, <RichTextWithFXWithOptimizedAppearEffect __fromCanvasComponent className="framer-1f7wmhl" data-framer-appear-id="1f7wmhl" data-framer-name="Text 3" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="kIqde0XrR" style={{
            "--framer-paragraph-spacing": "0px"
          }} text={DTbD9rT1W} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
            yQnSBc9qa: {
              __perspectiveFX: false,
              __smartComponentFX: true,
              __targetOpacity: 1,
              animate: animation,
              initial: animation1,
              optimized: true
            }
          }, baseVariant, gestureVariant)}>{<React3.Fragment>{_jsx3(motion2.p, {
                className: "framer-styles-preset-izlnn8",
                "data-styles-preset": "eqDmnbQxL",
                children: "Strategy"
              })}</React3.Fragment>}</RichTextWithFXWithOptimizedAppearEffect>, <RichTextWithFXWithOptimizedAppearEffect __fromCanvasComponent className="framer-t0tsr" data-framer-appear-id="t0tsr" data-framer-name="Text 4" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="mRnqcLbm7" style={{
            "--framer-paragraph-spacing": "0px"
          }} text={UVsRBS2xZ} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
            yQnSBc9qa: {
              __perspectiveFX: false,
              __smartComponentFX: true,
              __targetOpacity: 1,
              animate: animation,
              initial: animation1,
              optimized: true
            }
          }, baseVariant, gestureVariant)}>{<React3.Fragment>{_jsx3(motion2.p, {
                className: "framer-styles-preset-izlnn8",
                "data-styles-preset": "eqDmnbQxL",
                children: "Web Design"
              })}</React3.Fragment>}</RichTextWithFXWithOptimizedAppearEffect>]
        })}</Transition2>}</Variants2>}</LayoutGroup2>;
});
var css4 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-HEDEE.framer-17qwq02, .framer-HEDEE .framer-17qwq02 { display: block; }", ".framer-HEDEE.framer-xlotgl { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 300px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1440px; }", ".framer-HEDEE .framer-u73k71 { flex: none; height: 1px; left: calc(50.00000000000002% - 100% / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 1px / 2); width: 100%; }", ".framer-HEDEE .framer-1602xft, .framer-HEDEE .framer-1qj1b6h, .framer-HEDEE .framer-1f7wmhl, .framer-HEDEE .framer-t0tsr { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-HEDEE.framer-v-1rbv0do .framer-u73k71 { height: 24px; top: calc(50.00000000000002% - 24px / 2); }", ...css3];
var FramerKyg61OlWr = withCSS2(Component2, css4, "framer-HEDEE");
var Kyg61OlWr_default = FramerKyg61OlWr;
FramerKyg61OlWr.displayName = "Animated Banner";
FramerKyg61OlWr.defaultProps = {
  height: 24,
  width: 1440
};
addPropertyControls3(FramerKyg61OlWr, {
  variant: {
    options: ["p6MHOXaId", "yQnSBc9qa"],
    optionTitles: ["Normal", "Appear"],
    title: "Variant",
    type: ControlType3.Enum
  },
  Y0AFFcDc9: {
    defaultValue: "Art Direction",
    displayTextArea: false,
    title: "Title 1",
    type: ControlType3.String
  },
  L7I1r5V52: {
    defaultValue: "Branding",
    displayTextArea: false,
    title: "Title 2",
    type: ControlType3.String
  },
  DTbD9rT1W: {
    defaultValue: "Strategy",
    displayTextArea: false,
    title: "Title 3",
    type: ControlType3.String
  },
  UVsRBS2xZ: {
    defaultValue: "Web Design",
    displayTextArea: false,
    title: "Title 4",
    type: ControlType3.String
  }
});
addFonts2(FramerKyg61OlWr, [{
  explicitInter: true,
  fonts: [{
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
    url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+1F00-1FFF",
    url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0370-03FF",
    url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
    url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
    url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
    weight: "400"
  }]
}, ...getFontsFromSharedStyle(fonts2)], {
  supportsExplicitInterCodegen: true
});

// http-url:https://framerusercontent.com/modules/rdU31GFJjnEf7Ngyp6Ot/PNlKAvs4Dov1tIMc93ZF/wPQEBj6SF.js
import { jsx as _jsx5, jsxs as _jsxs3 } from "react/jsx-runtime";
import { addFonts as addFonts3, addPropertyControls as addPropertyControls5, ComponentViewportProvider, ControlType as ControlType8, cx as cx3, CycleVariantState, getFonts, getPropertyControls, SmartComponentScopedContainer, useActiveVariantCallback as useActiveVariantCallback2, useComponentViewport as useComponentViewport3, useLocaleInfo as useLocaleInfo3, useOnVariantChange as useOnVariantChange2, useVariantState as useVariantState3, withCSS as withCSS3 } from "./framer.js";
import { LayoutGroup as LayoutGroup3, motion as motion3, MotionConfigContext as MotionConfigContext3 } from "./framer.js";
import * as React6 from "react";
import { useRef as useRef7 } from "react";

// http-url:https://framerusercontent.com/modules/o1PI5S8YtkA5bP5g4dFz/s801VqobGI0Gkh3K9b41/Embed.js
import { jsx as _jsx4 } from "react/jsx-runtime";
import { useEffect as useEffect8, useRef as useRef6, useState as useState3 } from "react";
import { addPropertyControls as addPropertyControls4, ControlType as ControlType7 } from "./framer.js";

// http-url:https://framerusercontent.com/modules/VTUDdizacRHpwbkOamr7/AykinQJbgwl92LvMGZwu/constants.js
import { ControlType as ControlType4 } from "./framer.js";
var containerStyles = {
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
var emptyStateStyle = {
  ...containerStyles,
  borderRadius: 6,
  background: "rgba(136, 85, 255, 0.3)",
  color: "#85F",
  border: "1px dashed #85F",
  flexDirection: "column"
};
var defaultEvents = {
  onClick: {
    type: ControlType4.EventHandler
  },
  onMouseEnter: {
    type: ControlType4.EventHandler
  },
  onMouseLeave: {
    type: ControlType4.EventHandler
  }
};
var fontSizeOptions = {
  type: ControlType4.Number,
  title: "Font Size",
  min: 2,
  max: 200,
  step: 1,
  displayStepper: true
};
var fontControls = {
  font: {
    type: ControlType4.Boolean,
    title: "Font",
    defaultValue: false,
    disabledTitle: "Default",
    enabledTitle: "Custom"
  },
  fontFamily: {
    type: ControlType4.String,
    title: "Family",
    placeholder: "Inter",
    hidden: ({
      font
    }) => !font
  },
  fontWeight: {
    type: ControlType4.Enum,
    title: "Weight",
    options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    optionTitles: ["Thin", "Extra-light", "Light", "Regular", "Medium", "Semi-bold", "Bold", "Extra-bold", "Black"],
    hidden: ({
      font
    }) => !font
  }
};

// http-url:https://framerusercontent.com/modules/D4TWeLfcxT6Tysr2BlYg/iZjmqdxVx1EOiM3k1FaW/useOnNavigationTargetChange.js
import { useIsInCurrentNavigationTarget } from "./framer.js";
import { useEffect as useEffect2 } from "react";

// http-url:https://framerusercontent.com/modules/ExNgrA7EJTKUPpH6vIlN/eiOrSJ2Ab5M9jPCvVwUz/useConstant.js
import { useRef as useRef4 } from "react";

// http-url:https://framerusercontent.com/modules/D2Lz5CmnNVPZFFiZXalt/QaCzPbriZBfXWZIIycFI/colorFromToken.js
import { Color } from "./framer.js";

// http-url:https://framerusercontent.com/modules/3mKFSGQqKHV82uOV1eBc/5fbRLvOpxZC0JOXugvwm/isMotionValue.js
import { MotionValue } from "./framer.js";

// http-url:https://framerusercontent.com/modules/xDiQsqBGXzmMsv7AlEVy/uhunpMiNsbXxzjlXsg1y/useUniqueClassName.js
import * as React4 from "react";

// http-url:https://framerusercontent.com/modules/ETACN5BJyFTSo0VVDJfu/NHRqowOiXkF9UwOzczF7/variantUtils.js
import { ControlType as ControlType5 } from "./framer.js";

// http-url:https://framerusercontent.com/modules/eMBrwoqQK7h6mEeGQUH8/GuplvPJVjmxpk9zqOTcb/isBrowser.js
import { useMemo as useMemo3 } from "react";

// http-url:https://framerusercontent.com/modules/v9AWX2URmiYsHf7GbctE/XxKAZ9KlhWqf5x1JMyyF/useOnChange.js
import { useEffect as useEffect4 } from "react";

// http-url:https://framerusercontent.com/modules/kNDwabfjDEb3vUxkQlZS/fSIr3AOAYbGlfSPgXpYu/useAutoMotionValue.js
import { useCallback as useCallback2, useEffect as useEffect5, useRef as useRef5 } from "react";
import { motionValue, animate, RenderTarget } from "./framer.js";

// http-url:https://framerusercontent.com/modules/cuQH4dmpDnV8YK1mSgQX/KqRXqunFjE6ufhpc7ZRu/useFontControls.js
import { fontStore as fontStore3 } from "./framer.js";
import { useEffect as useEffect6 } from "react";

// http-url:https://framerusercontent.com/modules/afBE9Yx1W6bY5q32qPxe/m3q7puE2tbo1S2C0s0CT/useRenderTarget.js
import { useMemo as useMemo4 } from "react";
import { RenderTarget as RenderTarget2 } from "./framer.js";
function useIsOnCanvas() {
  const onCanvas = useMemo4(() => RenderTarget2.current() === RenderTarget2.canvas, []);
  return onCanvas;
}

// http-url:https://framerusercontent.com/modules/zGkoP8tPDCkoBzMdt5uq/0zFSjxIYliHxrQQnryFX/useControlledState.js
import * as React5 from "react";

// http-url:https://framerusercontent.com/modules/5SM58HxZHxjjv7aLMOgQ/WXz9i6mVki0bBCrKdqB3/propUtils.js
import { useMemo as useMemo5 } from "react";
import { ControlType as ControlType6 } from "./framer.js";
import { jsx as _ctxJsx } from "react/jsx-runtime";
import { ContextProviders, WithResponsiveVariants } from "./context.jsx";

var borderRadiusControl = {
  borderRadius: {
    title: "Radius",
    type: ControlType6.FusedNumber,
    toggleKey: "isMixedBorderRadius",
    toggleTitles: ["Radius", "Radius per corner"],
    valueKeys: ["topLeftRadius", "topRightRadius", "bottomRightRadius", "bottomLeftRadius"],
    valueLabels: ["TL", "TR", "BR", "BL"],
    min: 0
  }
};
var paddingControl = {
  padding: {
    type: ControlType6.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
    title: "Padding"
  }
};

// http-url:https://framerusercontent.com/modules/o1PI5S8YtkA5bP5g4dFz/s801VqobGI0Gkh3K9b41/Embed.js
function Embed({
  type,
  url,
  html,
  zoom,
  radius,
  border,
  style = {}
}) {
  if (type === "url" && url) {
    return <EmbedUrl url={url} zoom={zoom} radius={radius} border={border} style={style} />;
  }
  if (type === "html" && html) {
    return <EmbedHtml html={html} style={style} />;
  }
  return <Instructions style={style} />;
}
addPropertyControls4(Embed, {
  type: {
    type: ControlType7.Enum,
    defaultValue: "url",
    displaySegmentedControl: true,
    options: ["url", "html"],
    optionTitles: ["URL", "HTML"]
  },
  url: {
    title: "URL",
    type: ControlType7.String,
    description: "Some websites don\u2019t support embedding.",
    hidden(props) {
      return props.type !== "url";
    }
  },
  html: {
    title: "HTML",
    type: ControlType7.String,
    displayTextArea: true,
    hidden(props) {
      return props.type !== "html";
    }
  },
  border: {
    title: "Border",
    type: ControlType7.Border,
    optional: true,
    hidden(props) {
      return props.type !== "url";
    }
  },
  radius: {
    type: ControlType7.BorderRadius,
    title: "Radius",
    hidden(props) {
      return props.type !== "url";
    }
  },
  zoom: {
    title: "Zoom",
    defaultValue: 1,
    type: ControlType7.Number,
    hidden(props) {
      return props.type !== "url";
    },
    min: 0.1,
    max: 1,
    step: 0.1,
    displayStepper: true
  }
});
function Instructions({
  style
}) {
  return <div style={{
    minHeight: getMinHeight(style),
    ...emptyStateStyle,
    overflow: "hidden",
    ...style
  }}>{<div style={centerTextStyle}>To embed a website or widget, add it to the properties panel.</div>}</div>;
}
function EmbedUrl({
  url,
  zoom,
  radius,
  border,
  style
}) {
  const hasAutoHeight = !style.height;
  if (!/[a-z]+:\/\//.test(url)) {
    url = "https://" + url;
  }
  const onCanvas = useIsOnCanvas();
  const [state, setState] = useState3(onCanvas ? void 0 : false);
  useEffect8(() => {
    if (!onCanvas) return;
    let isLastEffect = true;
    setState(void 0);
    async function load() {
      const response = await fetch("https://api.framer.com/functions/check-iframe-url?url=" + encodeURIComponent(url));
      if (response.status == 200) {
        const {
          isBlocked
        } = await response.json();
        if (isLastEffect) {
          setState(isBlocked);
        }
      } else {
        const message = await response.text();
        console.error(message);
        const error = new Error("This site can\u2019t be reached.");
        setState(error);
      }
    }
    load().catch(error => {
      console.error(error);
      setState(error);
    });
    return () => {
      isLastEffect = false;
    };
  }, [url]);
  if (onCanvas && hasAutoHeight) {
    return <ErrorMessage message="URL embeds do not support auto height." style={style} />;
  }
  if (!url.startsWith("https://")) {
    return <ErrorMessage message="Unsupported protocol." style={style} />;
  }
  if (state === void 0) {
    return <LoadingIndicator />;
  }
  if (state instanceof Error) {
    return <ErrorMessage message={state.message} style={style} />;
  }
  if (state === true) {
    const message = `Can\u2019t embed ${url} due to its content security policy.`;
    return <ErrorMessage message={message} style={style} />;
  }
  return <iframe src={url} style={{
    ...iframeStyle,
    ...style,
    ...border,
    zoom,
    borderRadius: radius,
    transformOrigin: "top center"
  }} loading="lazy" fetchPriority={onCanvas ? "low" : "auto"} referrerPolicy="no-referrer" sandbox={getSandbox(onCanvas)} />;
}
var iframeStyle = {
  width: "100%",
  height: "100%",
  border: "none"
};
function getSandbox(onCanvas) {
  const result = ["allow-same-origin", "allow-scripts"];
  if (!onCanvas) {
    result.push("allow-downloads", "allow-forms", "allow-modals", "allow-orientation-lock", "allow-pointer-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-storage-access-by-user-activation", "allow-top-navigation-by-user-activation");
  }
  return result.join(" ");
}
function EmbedHtml({
  html,
  ...props
}) {
  const hasScript = html.includes("<\/script>");
  if (hasScript) {
    const hasSplineViewer = html.includes("</spline-viewer>");
    const hasComment = html.includes("<!-- framer-direct-embed -->");
    if (hasSplineViewer || hasComment) {
      return <EmbedHtmlWithScripts html={html} {...props} />;
    }
    return <EmbedHtmlInsideIframe html={html} {...props} />;
  }
  return <EmbedHtmlWithoutScripts html={html} {...props} />;
}
function EmbedHtmlInsideIframe({
  html,
  style
}) {
  const ref = useRef6();
  const [iframeHeight, setIframeHeight] = useState3(0);
  useEffect8(() => {
    const iframeWindow = ref.current?.contentWindow;
    function handleMessage(event) {
      if (event.source !== iframeWindow) return;
      const data = event.data;
      if (typeof data !== "object" || data === null) return;
      const height = data.embedHeight;
      if (typeof height !== "number") return;
      setIframeHeight(height);
    }
    window.addEventListener("message", handleMessage);
    iframeWindow?.postMessage("getEmbedHeight", "*");
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);
  const srcDoc = `
<html>
    <head>
        <style>
            html, body {
                margin: 0;
                padding: 0;
            }

            body {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            :root {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }

            * {
                box-sizing: border-box;
                -webkit-font-smoothing: inherit;
            }

            h1, h2, h3, h4, h5, h6, p, figure {
                margin: 0;
            }

            body, input, textarea, select, button {
                font-size: 12px;
                font-family: sans-serif;
            }
        </style>
    </head>
    <body>
        ${html}
        <script type="module">
            let height = 0

            function sendEmbedHeight() {
                window.parent.postMessage({
                    embedHeight: height
                }, "*")
            }

            const observer = new ResizeObserver((entries) => {
                if (entries.length !== 1) return
                const entry = entries[0]
                if (entry.target !== document.body) return

                height = entry.contentRect.height
                sendEmbedHeight()
            })

            observer.observe(document.body)

            window.addEventListener("message", (event) => {
                if (event.source !== window.parent) return
                if (event.data !== "getEmbedHeight") return
                sendEmbedHeight()
            })
        <\/script>
    <body>
</html>
`;
  const currentStyle = {
    ...iframeStyle,
    ...style
  };
  const hasAutoHeight = !style.height;
  if (hasAutoHeight) {
    currentStyle.height = iframeHeight + "px";
  }
  return <iframe ref={ref} style={currentStyle} srcDoc={srcDoc} />;
}
function EmbedHtmlWithScripts({
  html,
  style
}) {
  const ref = useRef6();
  useEffect8(() => {
    const div = ref.current;
    if (!div) return;
    div.innerHTML = html;
    executeScripts(div);
    return () => {
      div.innerHTML = "";
    };
  }, [html]);
  return <div ref={ref} style={{
    ...htmlStyle,
    ...style
  }} />;
}
function EmbedHtmlWithoutScripts({
  html,
  style
}) {
  return <div style={{
    ...htmlStyle,
    ...style
  }} dangerouslySetInnerHTML={{
    __html: html
  }} />;
}
var htmlStyle = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};
function executeScripts(node) {
  if (node instanceof Element && node.tagName === "SCRIPT") {
    const script = document.createElement("script");
    script.text = node.innerHTML;
    for (const {
      name,
      value
    } of node.attributes) {
      script.setAttribute(name, value);
    }
    node.parentElement.replaceChild(script, node);
  } else {
    for (const child of node.childNodes) {
      executeScripts(child);
    }
  }
}
function LoadingIndicator() {
  return <div className="framerInternalUI-componentPlaceholder" style={{
    ...containerStyles,
    overflow: "hidden"
  }}>{<div style={centerTextStyle}>Loading…</div>}</div>;
}
function ErrorMessage({
  message,
  style
}) {
  return <div className="framerInternalUI-errorPlaceholder" style={{
    minHeight: getMinHeight(style),
    ...containerStyles,
    overflow: "hidden",
    ...style
  }}>{<div style={centerTextStyle}>{message}</div>}</div>;
}
var centerTextStyle = {
  textAlign: "center",
  minWidth: 140
};
function getMinHeight(style) {
  const hasAutoHeight = !style.height;
  if (hasAutoHeight) return 200;
}

// http-url:https://framerusercontent.com/modules/rdU31GFJjnEf7Ngyp6Ot/PNlKAvs4Dov1tIMc93ZF/wPQEBj6SF.js
var EmbedFonts = getFonts(Embed);
var EmbedControls = getPropertyControls(Embed);
var serializationHash3 = "framer-ftJha";
var variantClassNames3 = {
  yXZsKtn6j: "framer-v-oynkpq"
};
var transition13 = {
  bounce: 0.2,
  delay: 0,
  duration: 0.4,
  type: "spring"
};
var Transition3 = ({
  value,
  children
}) => {
  const config = React6.useContext(MotionConfigContext3);
  const transition = value ?? config.transition;
  const contextValue = React6.useMemo(() => ({
    ...config,
    transition
  }), [JSON.stringify(transition)]);
  return <MotionConfigContext3.Provider value={contextValue}>{children}</MotionConfigContext3.Provider>;
};
var Variants3 = motion3.create(React6.Fragment);
var humanReadableEnumMap = {
  HTML: "html",
  URL: "url"
};
var getProps3 = ({
  height,
  hTML,
  id,
  type,
  width,
  ...props
}) => {
  return {
    ...props,
    BA7jwhB7b: hTML ?? props.BA7jwhB7b ?? '<iframe \n  src="https://player.vimeo.com/video/315891633?autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0"\n  frameborder="0" \n  allow="autoplay; fullscreen" \n  allowfullscreen \n  width="144%" \n  height="101%">\n</iframe>\n',
    tuzgfJ02F: humanReadableEnumMap[type] ?? type ?? props.tuzgfJ02F ?? "html"
  };
};
var createLayoutDependency3 = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component3 = React6.forwardRef(function (props, ref) {
  const fallbackRef = useRef7(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React6.useId();
  const {
    activeLocale,
    setLocale
  } = useLocaleInfo3();
  const componentViewport = useComponentViewport3();
  const {
    style,
    className: className3,
    layoutId,
    variant,
    tuzgfJ02F,
    BA7jwhB7b,
    ...restProps
  } = getProps3(props);
  const {
    baseVariant,
    classNames,
    clearLoadingGesture,
    gestureHandlers,
    gestureVariant,
    isLoading,
    setGestureState,
    setVariant,
    variants
  } = useVariantState3({
    defaultVariant: "yXZsKtn6j",
    ref: refBinding,
    variant,
    variantClassNames: variantClassNames3
  });
  const layoutDependency = createLayoutDependency3(props, variants);
  const {
    activeVariantCallback,
    delay
  } = useActiveVariantCallback2(baseVariant);
  const onAppear1cqvoj = activeVariantCallback(async (...args) => {
    await delay(() => setVariant(CycleVariantState, true), 1500);
  });
  useOnVariantChange2(baseVariant, {
    default: onAppear1cqvoj
  });
  const sharedStyleClassNames = [];
  const scopingClassNames = cx3(serializationHash3, ...sharedStyleClassNames);
  return <LayoutGroup3 id={layoutId ?? defaultLayoutId}>{<Variants3 animate={variants} initial={false}>{<Transition3 value={transition13}>{_jsxs3(motion3.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx3(scopingClassNames, "framer-oynkpq", className3, classNames),
          "data-framer-name": "Primary",
          "data-highlight": true,
          layoutDependency,
          layoutId: "yXZsKtn6j",
          ref: refBinding,
          style: {
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            ...style
          },
          children: [<ComponentViewportProvider>{<SmartComponentScopedContainer className="framer-8f0ulg-container" isAuthoredByUser isModuleExternal layoutDependency={layoutDependency} layoutId="cOKDVduVk-container" nodeId="cOKDVduVk" rendersWithMotion scopeId="wPQEBj6SF">{<Embed height="100%" html={BA7jwhB7b} id="cOKDVduVk" layoutId="cOKDVduVk" radius="0px" style={{
                height: "100%",
                width: "100%"
              }} type={tuzgfJ02F} url="" width="100%" zoom={1} />}</SmartComponentScopedContainer>}</ComponentViewportProvider>, _jsx5(motion3.div, {
            className: "framer-sz7x46",
            "data-framer-name": "Cursor Preventer",
            layoutDependency,
            layoutId: "jaQzlwJBv"
          })]
        })}</Transition3>}</Variants3>}</LayoutGroup3>;
});
var css5 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-ftJha.framer-18i9yos, .framer-ftJha .framer-18i9yos { display: block; }", ".framer-ftJha.framer-oynkpq { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 379px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 390px; will-change: var(--framer-will-change-override, transform); }", ".framer-ftJha .framer-8f0ulg-container { flex: none; height: 101%; left: calc(50.10570824524315% - 144% / 2); position: absolute; top: calc(50.13192612137205% - 101.05540897097625% / 2); width: 144%; }", ".framer-ftJha .framer-sz7x46 { flex: none; height: 101%; left: calc(49.89429175475689% - 145% / 2); overflow: hidden; position: absolute; top: calc(49.86807387862799% - 101% / 2); width: 145%; z-index: 1; }"];
var FramerwPQEBj6SF = withCSS3(Component3, css5, "framer-ftJha");
var wPQEBj6SF_default = FramerwPQEBj6SF;
FramerwPQEBj6SF.displayName = "Embed Card";
FramerwPQEBj6SF.defaultProps = {
  height: 379,
  width: 390
};
addPropertyControls5(FramerwPQEBj6SF, {
  tuzgfJ02F: EmbedControls?.["type"] && {
    ...EmbedControls["type"],
    defaultValue: "html",
    description: void 0,
    hidden: void 0,
    title: "Type"
  },
  BA7jwhB7b: {
    defaultValue: '<iframe \n  src="https://player.vimeo.com/video/315891633?autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0"\n  frameborder="0" \n  allow="autoplay; fullscreen" \n  allowfullscreen \n  width="144%" \n  height="101%">\n</iframe>\n',
    displayTextArea: true,
    title: "HTML",
    type: ControlType8.String
  }
});
addFonts3(FramerwPQEBj6SF, [{
  explicitInter: true,
  fonts: []
}, ...EmbedFonts], {
  supportsExplicitInterCodegen: true
});

// http-url:https://framerusercontent.com/modules/kLwsvOXcxpnqfVX8XTY1/KprNIId490qwKYHmPRdn/unsgSXGX8.js
var AnimatedBannerFonts = getFonts2(Kyg61OlWr_default);
var RichTextWithFXWithOptimizedAppearEffect2 = withOptimizedAppearEffect2(withFX2(RichText3));
var EmbedCardFonts = getFonts2(wPQEBj6SF_default);
var DHoverFonts = getFonts2(Hover3D);
var SmartComponentScopedContainerWithFXWithOptimizedAppearEffect = withOptimizedAppearEffect2(withFX2(SmartComponentScopedContainer2));
var MotionDivWithFXWithOptimizedAppearEffect = withOptimizedAppearEffect2(withFX2(motion4.div));
var cycleOrder2 = ["MHiTKHdUJ", "G49XiQD6C", "hcDI6m_au"];
var serializationHash4 = "framer-ioIq7";
var variantClassNames4 = {
  G49XiQD6C: "framer-v-10jvlyl",
  hcDI6m_au: "framer-v-1cpsgsg",
  MHiTKHdUJ: "framer-v-dhlfab"
};
function addPropertyOverrides2(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach(variant => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition14 = {
  bounce: 0.2,
  delay: 0,
  duration: 0.4,
  type: "spring"
};
var transformTemplate1 = (_, t) => `translateX(-50%) ${t}`;
var matchVariant = (...args) => {
  for (const arg of args) {
    if (arg && typeof arg === "string") return arg;
  }
  return void 0;
};
var transition22 = {
  damping: 60,
  delay: 4.3,
  mass: 1,
  stiffness: 300,
  type: "spring"
};
var animation2 = {
  opacity: 1,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  transition: transition22,
  x: 0,
  y: 0
};
var animation12 = {
  opacity: 1e-3,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  x: 0,
  y: 45
};
var transition3 = {
  damping: 60,
  delay: 4.35,
  mass: 1,
  stiffness: 300,
  type: "spring"
};
var animation22 = {
  opacity: 1,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  transition: transition3,
  x: 0,
  y: 0
};
var transition4 = {
  damping: 60,
  delay: 4.4,
  mass: 1,
  stiffness: 300,
  type: "spring"
};
var animation3 = {
  opacity: 1,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  transition: transition4,
  x: 0,
  y: 0
};
var transition5 = {
  damping: 60,
  delay: 4.45,
  mass: 1,
  stiffness: 300,
  type: "spring"
};
var animation4 = {
  opacity: 1,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  transition: transition5,
  x: 0,
  y: 0
};
var transition6 = {
  delay: 2.9,
  duration: 1.4,
  ease: [0.96, -0.02, 0.38, 1.01],
  type: "tween"
};
var animation5 = {
  opacity: 1,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  transition: transition6,
  x: 0,
  y: 0
};
var animation6 = {
  opacity: 0.1,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 0.3,
  skewX: 0,
  skewY: 0,
  x: 280,
  y: -270
};
var transition7 = {
  delay: 3.2,
  duration: 1.4,
  ease: [0.96, -0.02, 0.38, 1.01],
  type: "tween"
};
var animation7 = {
  opacity: 1,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  transition: transition7,
  x: 0,
  y: 0
};
var transition8 = {
  damping: 60,
  delay: 4,
  mass: 1,
  stiffness: 200,
  type: "spring"
};
var animation8 = {
  opacity: 1,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  transition: transition8,
  x: 0,
  y: 0
};
var animation9 = {
  opacity: 1,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  x: -1520,
  y: 0
};
var transition9 = {
  delay: 0,
  duration: 2.8,
  ease: [0.69, 0, 0.05, 0.98],
  type: "tween"
};
var animation10 = {
  opacity: 1,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  transition: transition9,
  x: 0,
  y: 0
};
var animation11 = {
  opacity: 1e-3,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  x: 0,
  y: -520
};
var transition10 = {
  delay: 2.9,
  duration: 1.4,
  ease: [0.95, -0.02, 0.38, 1],
  type: "tween"
};
var animation122 = {
  opacity: 1,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  transition: transition10,
  x: 0,
  y: 0
};
var animation13 = {
  opacity: 1,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 0.6,
  skewX: 0,
  skewY: 0,
  x: 0,
  y: -350
};
var transition11 = {
  bounce: 0.2,
  delay: 3,
  duration: 2.5,
  type: "spring"
};
var animation14 = {
  opacity: 1,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  transition: transition11,
  x: 0,
  y: 0
};
var animation15 = {
  opacity: 0.9,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  x: -1440,
  y: 0
};
var animation16 = {
  opacity: 0.9,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  transition: transition6,
  x: 0,
  y: 0
};
var Transition4 = ({
  value,
  children
}) => {
  const config = React7.useContext(MotionConfigContext4);
  const transition = value ?? config.transition;
  const contextValue = React7.useMemo(() => ({
    ...config,
    transition
  }), [JSON.stringify(transition)]);
  return <MotionConfigContext4.Provider value={contextValue}>{children}</MotionConfigContext4.Provider>;
};
var humanReadableVariantMap2 = {
  L: "MHiTKHdUJ",
  M: "G49XiQD6C",
  S: "hcDI6m_au"
};
var Variants4 = motion4.create(React7.Fragment);
var getProps4 = ({
  click,
  height,
  id,
  width,
  ...props
}) => {
  return {
    ...props,
    variant: humanReadableVariantMap2[props.variant] ?? props.variant ?? "MHiTKHdUJ",
    vl4K7GDMR: click ?? props.vl4K7GDMR
  };
};
var createLayoutDependency4 = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component4 = React7.forwardRef(function (props, ref) {
  const fallbackRef = useRef8(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React7.useId();
  const {
    activeLocale,
    setLocale
  } = useLocaleInfo4();
  const componentViewport = useComponentViewport4();
  const {
    style,
    className: className3,
    layoutId,
    variant,
    vl4K7GDMR,
    ...restProps
  } = getProps4(props);
  const {
    baseVariant,
    classNames,
    clearLoadingGesture,
    gestureHandlers,
    gestureVariant,
    isLoading,
    setGestureState,
    setVariant,
    variants
  } = useVariantState4({
    cycleOrder: cycleOrder2,
    defaultVariant: "MHiTKHdUJ",
    ref: refBinding,
    variant,
    variantClassNames: variantClassNames4
  });
  const layoutDependency = createLayoutDependency4(props, variants);
  const {
    activeVariantCallback,
    delay
  } = useActiveVariantCallback3(baseVariant);
  const onTap1euxr98 = activeVariantCallback(async (...args) => {
    if (vl4K7GDMR) {
      const res = await vl4K7GDMR(...args);
      if (res === false) return false;
    }
  });
  const sharedStyleClassNames = [className];
  const scopingClassNames = cx4(serializationHash4, ...sharedStyleClassNames);
  const isDisplayed = () => {
    if (baseVariant === "hcDI6m_au") return false;
    return true;
  };
  return <LayoutGroup4 id={layoutId ?? defaultLayoutId}>{<Variants4 animate={variants} initial={false}>{<Transition4 value={transition14}>{_jsxs4(motion4.section, {
          ...restProps,
          ...gestureHandlers,
          className: cx4(scopingClassNames, "framer-dhlfab", className3, classNames),
          "data-framer-name": "L",
          layoutDependency,
          layoutId: "MHiTKHdUJ",
          ref: refBinding,
          style: {
            backgroundColor: "var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))",
            ...style
          },
          ...addPropertyOverrides2({
            G49XiQD6C: {
              "data-framer-name": "M"
            },
            hcDI6m_au: {
              "data-framer-name": "S"
            }
          }, baseVariant, gestureVariant),
          children: [isDisplayed() && <ComponentViewportProvider2 height={24} width={componentViewport?.width || "100vw"} y={(componentViewport?.y || 0) + 396}>{<SmartComponentScopedContainer2 className="framer-1y2k8yn-container" layoutDependency={layoutDependency} layoutId="rNTD5l1zU-container" nodeId="rNTD5l1zU" rendersWithMotion scopeId="unsgSXGX8" transformTemplate={transformTemplate1}>{<Kyg61OlWr_default DTbD9rT1W="Strategy" height="100%" id="rNTD5l1zU" L7I1r5V52="Branding" layoutId="rNTD5l1zU" style={{
                width: "100%"
              }} UVsRBS2xZ="Web Design" variant={matchVariant("p6MHOXaId")} width="100%" Y0AFFcDc9="Art Direction" />}</SmartComponentScopedContainer2>}</ComponentViewportProvider2>, _jsxs4(motion4.div, {
            className: "framer-ty36tk",
            "data-framer-name": "Top",
            layoutDependency,
            layoutId: "ZLi8u0hlm",
            children: [_jsxs4(motion4.div, {
              className: "framer-1n76yiy",
              "data-framer-name": "Heading",
              layoutDependency,
              layoutId: "UkPd9jcTf",
              children: [_jsx6(motion4.div, {
                className: "framer-x5pde",
                "data-framer-name": "1",
                layoutDependency,
                layoutId: "FvdOI1MOl",
                children: <RichTextWithFXWithOptimizedAppearEffect2 __fromCanvasComponent __perspectiveFX={false} __smartComponentFX __targetOpacity={1} animate={animation2} className="framer-7eph4s" data-framer-appear-id="7eph4s" data-framer-name="Text" fonts={["Inter"]} initial={animation12} layoutDependency={layoutDependency} layoutId="Uao5w_1fg" optimized style={{
                  "--framer-paragraph-spacing": "0px"
                }} verticalAlignment="top" withExternalLayout>{<React7.Fragment>{_jsx6(motion4.h3, {
                      className: "framer-styles-preset-sng7in",
                      "data-styles-preset": "bLxN69a46",
                      dir: "auto",
                      children: "Pattern Dimensions"
                    })}</React7.Fragment>}</RichTextWithFXWithOptimizedAppearEffect2>
              }), _jsx6(motion4.div, {
                className: "framer-1ki04el",
                "data-framer-name": "2",
                layoutDependency,
                layoutId: "JRk_gBz_W",
                children: <RichTextWithFXWithOptimizedAppearEffect2 __fromCanvasComponent __perspectiveFX={false} __smartComponentFX __targetOpacity={1} animate={animation22} className="framer-19l0zu6" data-framer-appear-id="19l0zu6" data-framer-name="Text" fonts={["Inter"]} initial={animation12} layoutDependency={layoutDependency} layoutId="bi1ROnTfu" optimized style={{
                  "--framer-paragraph-spacing": "0px"
                }} verticalAlignment="top" withExternalLayout>{<React7.Fragment>{_jsx6(motion4.h3, {
                      className: "framer-styles-preset-sng7in",
                      "data-styles-preset": "bLxN69a46",
                      dir: "auto",
                      children: "and Moments that"
                    })}</React7.Fragment>}</RichTextWithFXWithOptimizedAppearEffect2>
              }), _jsx6(motion4.div, {
                className: "framer-mxo2f9",
                "data-framer-name": "3",
                layoutDependency,
                layoutId: "Dz6qa5XRs",
                children: <RichTextWithFXWithOptimizedAppearEffect2 __fromCanvasComponent __perspectiveFX={false} __smartComponentFX __targetOpacity={1} animate={animation3} className="framer-1xqbms1" data-framer-appear-id="1xqbms1" data-framer-name="Text" fonts={["Inter"]} initial={animation12} layoutDependency={layoutDependency} layoutId="emr_Rk3PC" optimized style={{
                  "--framer-paragraph-spacing": "0px"
                }} verticalAlignment="top" withExternalLayout>{<React7.Fragment>{_jsx6(motion4.h3, {
                      className: "framer-styles-preset-sng7in",
                      "data-styles-preset": "bLxN69a46",
                      dir: "auto",
                      children: "Connect and Leave a "
                    })}</React7.Fragment>}</RichTextWithFXWithOptimizedAppearEffect2>
              }), _jsx6(motion4.div, {
                className: "framer-za16rf",
                "data-framer-name": "4",
                layoutDependency,
                layoutId: "qTy7BpeAq",
                children: <RichTextWithFXWithOptimizedAppearEffect2 __fromCanvasComponent __perspectiveFX={false} __smartComponentFX __targetOpacity={1} animate={animation4} className="framer-9kazno" data-framer-appear-id="9kazno" data-framer-name="Text" fonts={["Inter"]} initial={animation12} layoutDependency={layoutDependency} layoutId="GhqVQ4ifC" optimized style={{
                  "--framer-paragraph-spacing": "0px"
                }} verticalAlignment="top" withExternalLayout>{<React7.Fragment>{_jsx6(motion4.h3, {
                      className: "framer-styles-preset-sng7in",
                      "data-styles-preset": "bLxN69a46",
                      dir: "auto",
                      children: "Bold \u30A4\u30E1\u30FC\u30B8."
                    })}</React7.Fragment>}</RichTextWithFXWithOptimizedAppearEffect2>
              })]
            }), _jsx6(motion4.div, {
              className: "framer-ajhxcq",
              "data-framer-name": "Reel",
              "data-highlight": true,
              layoutDependency,
              layoutId: "uwcZV4_aP",
              onTap: onTap1euxr98,
              style: {
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10
              },
              children: <ComponentViewportProvider2>{<SmartComponentScopedContainerWithFXWithOptimizedAppearEffect __perspectiveFX={false} __smartComponentFX __targetOpacity={1} animate={animation5} className="framer-1uxqzhi-container" data-framer-appear-id="1uxqzhi" initial={animation6} isAuthoredByUser isModuleExternal layoutDependency={layoutDependency} layoutId="KbVENUdy6-container" nodeId="KbVENUdy6" optimized rendersWithMotion scopeId="unsgSXGX8" {...addPropertyOverrides2({
                  hcDI6m_au: {
                    animate: animation7
                  }
                }, baseVariant, gestureVariant)}>{<Hover3D borderRadius={0} effect="evade" height="100%" id="KbVENUdy6" layoutId="KbVENUdy6" perspective={500} scale={1} tiltLimit={6} width="100%" {...addPropertyOverrides2({
                    hcDI6m_au: {
                      style: {
                        height: "100%",
                        width: "100%"
                      }
                    }
                  }, baseVariant, gestureVariant)}>{<ComponentViewportProvider2 height={379} width="390px">{<SmartComponentScopedContainer2 className="framer-1i47re8-container" inComponentSlot layoutDependency={layoutDependency} layoutId="l20i6c1kT-container" nodeId="l20i6c1kT" rendersWithMotion scopeId="unsgSXGX8">{_jsx6(wPQEBj6SF_default, {
                          BA7jwhB7b: '<iframe \n  src="https://player.vimeo.com/video/315891633?autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0"\n  frameborder="0" \n  allow="autoplay; fullscreen" \n  allowfullscreen \n  width="144%" \n  height="101%">\n</iframe>\n',
                          height: "100%",
                          id: "l20i6c1kT",
                          layoutId: "l20i6c1kT",
                          style: {
                            height: "100%",
                            width: "100%"
                          },
                          tuzgfJ02F: "html",
                          width: "100%"
                        })}</SmartComponentScopedContainer2>}</ComponentViewportProvider2>}</Hover3D>}</SmartComponentScopedContainerWithFXWithOptimizedAppearEffect>}</ComponentViewportProvider2>
            })]
          }), _jsxs4(motion4.div, {
            className: "framer-1jn9ae6",
            "data-framer-name": "Bottom",
            layoutDependency,
            layoutId: "PhXEV3EIK",
            children: [<MotionDivWithFXWithOptimizedAppearEffect __perspectiveFX={false} __smartComponentFX __targetOpacity={1} animate={animation8} className="framer-1snsm42" data-framer-appear-id="1snsm42" data-framer-name="Line" initial={animation9} layoutDependency={layoutDependency} layoutId="ayd_8IDOd" optimized style={{
              backgroundColor: "var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgba(187, 187, 187, 0.2))"
            }} />, <MotionDivWithFXWithOptimizedAppearEffect __perspectiveFX={false} __smartComponentFX __targetOpacity={1} animate={animation10} className="framer-2xxdw2" data-framer-appear-id="2xxdw2" data-framer-name="Title" initial={animation11} layoutDependency={layoutDependency} layoutId="uARPSIXcq" optimized>{<RichTextWithFXWithOptimizedAppearEffect2 __fromCanvasComponent __perspectiveFX={false} __smartComponentFX __targetOpacity={1} animate={animation122} className="framer-1nbr0fn" data-framer-appear-id="1nbr0fn" data-framer-name="Text" fonts={["FR;InterDisplay-SemiBold"]} initial={animation13} layoutDependency={layoutDependency} layoutId="H25rhj_By" optimized style={{
                "--extracted-r6o4lv": "var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))",
                "--framer-paragraph-spacing": "0px"
              }} verticalAlignment="top" viewBox="0 0 1404 357" withExternalLayout {...addPropertyOverrides2({
                G49XiQD6C: {
                  viewBox: "0 0 1406.47 357"
                },
                hcDI6m_au: {
                  viewBox: "0 0 1406.47 357"
                }
              }, baseVariant, gestureVariant)}>{<React7.Fragment>{_jsx6(motion4.p, {
                    dir: "auto",
                    style: {
                      "--font-selector": "RlI7SW50ZXJEaXNwbGF5LVNlbWlCb2xk",
                      "--framer-font-family": '"Inter Display", "Inter Display Placeholder", sans-serif',
                      "--framer-font-open-type-features": "'ss01' on, 'ss02' on, 'ss07' on, 'cv01' on, 'cv09' on, 'cv02' on, 'cv03' on, 'cv04' on, 'cv12' on, 'cv10' on, 'cv08' on, 'cv05' on, 'cv07' on, 'cv13' on, 'cv06' on",
                      "--framer-font-size": "397.19276501310577px",
                      "--framer-font-weight": "600",
                      "--framer-letter-spacing": "-21.47px",
                      "--framer-line-height": "90%",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))"
                    },
                    children: "Akihiko\u2122"
                  })}</React7.Fragment>}</RichTextWithFXWithOptimizedAppearEffect2>}{<MotionDivWithFXWithOptimizedAppearEffect __perspectiveFX={false} __smartComponentFX __targetOpacity={1} animate={animation14} className="framer-icxlw2" data-framer-appear-id="icxlw2" data-framer-name="Loader" initial={animation15} layoutDependency={layoutDependency} layoutId="CT6QmGVXy" optimized>{<MotionDivWithFXWithOptimizedAppearEffect __perspectiveFX={false} __smartComponentFX __targetOpacity={0.9} animate={animation16} className="framer-19mjztk" data-framer-appear-id="19mjztk" data-framer-name="Filler" initial={animation13} layoutDependency={layoutDependency} layoutId="QVf1OaclM" optimized style={{
                  backgroundColor: "var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))",
                  opacity: 0.9
                }} />}</MotionDivWithFXWithOptimizedAppearEffect>}</MotionDivWithFXWithOptimizedAppearEffect>, <MotionDivWithFXWithOptimizedAppearEffect __perspectiveFX={false} __smartComponentFX __targetOpacity={1} animate={animation8} className="framer-1oqrrs3" data-framer-appear-id="1oqrrs3" data-framer-name="Line" initial={animation9} layoutDependency={layoutDependency} layoutId="k00pG8sjm" optimized style={{
              backgroundColor: "var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgba(187, 187, 187, 0.2))"
            }} />]
          })]
        })}</Transition4>}</Variants4>}</LayoutGroup4>;
});
var css6 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-ioIq7.framer-1w1pv95, .framer-ioIq7 .framer-1w1pv95 { display: block; }", ".framer-ioIq7.framer-dhlfab { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1480px; overflow: hidden; padding: 90px 0px 0px 0px; position: relative; width: 1200px; }", ".framer-ioIq7 .framer-1y2k8yn-container { flex: none; height: auto; left: 50%; position: absolute; top: 396px; width: 100%; }", ".framer-ioIq7 .framer-ty36tk { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 24px; position: relative; width: 100%; }", ".framer-ioIq7 .framer-1n76yiy { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 540px; overflow: visible; padding: 16px 0px 0px 0px; position: relative; width: 1px; }", ".framer-ioIq7 .framer-x5pde, .framer-ioIq7 .framer-1ki04el, .framer-ioIq7 .framer-za16rf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-ioIq7 .framer-7eph4s, .framer-ioIq7 .framer-19l0zu6, .framer-ioIq7 .framer-9kazno { flex: none; height: auto; mix-blend-mode: difference; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-ioIq7 .framer-mxo2f9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-ioIq7 .framer-1xqbms1 { flex: 1 0 0px; height: auto; mix-blend-mode: difference; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", ".framer-ioIq7 .framer-ajhxcq { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-ioIq7 .framer-1uxqzhi-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-ioIq7 .framer-1i47re8-container { height: 379px; position: relative; width: 390px; }", ".framer-ioIq7 .framer-1jn9ae6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-ioIq7 .framer-1snsm42, .framer-ioIq7 .framer-1oqrrs3 { flex: none; height: 1px; overflow: hidden; position: relative; width: 100%; }", ".framer-ioIq7 .framer-2xxdw2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 24px 0px 24px; position: relative; width: 100%; }", ".framer-ioIq7 .framer-1nbr0fn { flex: 1 0 0px; height: auto; mix-blend-mode: difference; position: relative; white-space: pre; width: 1px; }", ".framer-ioIq7 .framer-icxlw2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; left: 1440px; overflow: visible; padding: 0px; position: absolute; top: 0px; width: 100%; z-index: 1; }", ".framer-ioIq7 .framer-19mjztk { flex: none; height: 100%; overflow: hidden; position: relative; width: 100%; z-index: 1; }", ".framer-ioIq7.framer-v-10jvlyl.framer-dhlfab { width: 810px; }", ".framer-ioIq7.framer-v-10jvlyl .framer-ty36tk { gap: 20px; justify-content: flex-start; }", ".framer-ioIq7.framer-v-1cpsgsg.framer-dhlfab { width: 390px; }", ".framer-ioIq7.framer-v-1cpsgsg .framer-ty36tk { flex-direction: column; gap: 30px; justify-content: flex-start; padding: 30px 20px 30px 20px; }", ".framer-ioIq7.framer-v-1cpsgsg .framer-1n76yiy { flex: none; padding: 0px; width: 100%; }", ".framer-ioIq7.framer-v-1cpsgsg .framer-ajhxcq { height: 220px; width: 100%; }", ".framer-ioIq7.framer-v-1cpsgsg .framer-1uxqzhi-container { flex: 1 0 0px; height: 100%; width: 1px; }", ".framer-ioIq7.framer-v-1cpsgsg .framer-2xxdw2 { padding: 0px 20px 0px 20px; }", ...css2];
var FramerunsgSXGX8 = withCSS4(Component4, css6, "framer-ioIq7");
var unsgSXGX8_default = FramerunsgSXGX8;
FramerunsgSXGX8.displayName = "Hero";
FramerunsgSXGX8.defaultProps = {
  height: 811.917,
  width: 1200
};
addPropertyControls6(FramerunsgSXGX8, {
  variant: {
    options: ["MHiTKHdUJ", "G49XiQD6C", "hcDI6m_au"],
    optionTitles: ["L", "M", "S"],
    title: "Variant",
    type: ControlType9.Enum
  },
  vl4K7GDMR: {
    title: "Click",
    type: ControlType9.EventHandler
  }
});
addFonts4(FramerunsgSXGX8, [{
  explicitInter: true,
  fonts: [{
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
    url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
    weight: "400"
  }, {
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
    weight: "400"
  }, {
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+1F00-1FFF",
    url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
    weight: "400"
  }, {
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+0370-03FF",
    url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
    weight: "400"
  }, {
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
    url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
    weight: "400"
  }, {
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2",
    weight: "400"
  }, {
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
    url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
    weight: "400"
  }, {
    cssFamilyName: "Inter Display",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter Display",
    unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
    url: "https://framerusercontent.com/assets/gazZKZuUEtvr9ULhdA4SprP0AZ0.woff2",
    weight: "600"
  }, {
    cssFamilyName: "Inter Display",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter Display",
    unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    url: "https://framerusercontent.com/assets/pe8RoujoPxuTZhqoNzYqHX2MXA.woff2",
    weight: "600"
  }, {
    cssFamilyName: "Inter Display",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter Display",
    unicodeRange: "U+1F00-1FFF",
    url: "https://framerusercontent.com/assets/teGhWnhH3bCqefKGsIsqFy3hK8.woff2",
    weight: "600"
  }, {
    cssFamilyName: "Inter Display",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter Display",
    unicodeRange: "U+0370-03FF",
    url: "https://framerusercontent.com/assets/qQHxgTnEk6Czu1yW4xS82HQWFOk.woff2",
    weight: "600"
  }, {
    cssFamilyName: "Inter Display",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter Display",
    unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
    url: "https://framerusercontent.com/assets/MJ3N6lfN4iP5Um8rJGqLYl03tE.woff2",
    weight: "600"
  }, {
    cssFamilyName: "Inter Display",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter Display",
    unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    url: "https://framerusercontent.com/assets/PfdOpgzFf7N2Uye9JX7xRKYTgSc.woff2",
    weight: "600"
  }, {
    cssFamilyName: "Inter Display",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter Display",
    unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
    url: "https://framerusercontent.com/assets/0SEEmmWc3vovhaai4RlRQSWRrz0.woff2",
    weight: "600"
  }]
}, ...AnimatedBannerFonts, ...EmbedCardFonts, ...DHoverFonts, ...getFontsFromSharedStyle2(fonts)], {
  supportsExplicitInterCodegen: true
});
FramerunsgSXGX8.loader = {
  load: (props, context) => {
    const locale = context.locale;
    return Promise.allSettled([forwardLoader(Kyg61OlWr_default, {}, context), forwardLoader(wPQEBj6SF_default, {}, context)]);
  }
};
var __FramerMetadata__ = {
  "exports": {
    "default": {
      "type": "reactComponent",
      "name": "FramerunsgSXGX8",
      "slots": [],
      "annotations": {
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"],"constraints":[null,"1480px",null,null]},"G49XiQD6C":{"layout":["fixed","auto"],"constraints":[null,"1480px",null,null]},"hcDI6m_au":{"layout":["fixed","auto"],"constraints":[null,"1480px",null,null]}}}',
        "framerComponentViewportWidth": "true",
        "framerIntrinsicWidth": "1200",
        "framerContractVersion": "1",
        "framerVariables": '{"vl4K7GDMR":"click"}',
        "framerDisplayContentsDiv": "false",
        "framerColorSyntax": "true",
        "framerImmutableVariables": "true",
        "framerIntrinsicHeight": "811.917",
        "framerAutoSizeImages": "true"
      }
    },
    "Props": {
      "type": "tsType",
      "annotations": {
        "framerContractVersion": "1"
      }
    },
    "__FramerMetadata__": {
      "type": "variable"
    }
  }
};
var _OriginalComponent = unsgSXGX8_default;
function HeroWithContext(props) {
    return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, { ...props }) });
}
Object.assign(HeroWithContext, _OriginalComponent);
HeroWithContext.Responsive = function HeroResponsive({ variants, ...rest }) {
    return _ctxJsx(ContextProviders, {
        children: _ctxJsx(WithResponsiveVariants, { Component: _OriginalComponent, variants: variants || { base: undefined }, ...rest })
    });
};
export {  __FramerMetadata__, HeroWithContext as default  };