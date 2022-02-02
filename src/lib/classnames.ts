const cx = (...classes: (false | null | undefined | string)[]): string =>
  classes.filter(Boolean).join(' ');

export default cx;
