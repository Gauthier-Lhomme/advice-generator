const size = {
    mobile: "375px",
    desktop: "376",
    retro: "1600px",
  };
  
  export const Device = {
    mobile: `(max-width: ${size.mobile})`,
    desktop: `(min-width: ${size.desktop} and max-width: ${size.retro})`,
    retro: `(min-width: ${size.retro})`,
  };