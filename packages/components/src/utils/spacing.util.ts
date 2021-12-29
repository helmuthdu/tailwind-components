import { classMap } from '../lib/custom-elements';

export type SpacingModifier = {
  p?: number | 'auto';
  px?: number | 'auto';
  py?: number | 'auto';
  pt?: number | 'auto';
  pr?: number | 'auto';
  pb?: number | 'auto';
  pl?: number | 'auto';
  m?: number | 'auto';
  mx?: number | 'auto';
  my?: number | 'auto';
  mt?: number | 'auto';
  mr?: number | 'auto';
  mb?: number | 'auto';
  ml?: number | 'auto';
  sx?: number | 'reverse';
  sy?: number | 'reverse';
};

const modifier = {
  defaultProps: {},
  getClassName: ({ m, mx, my, mt, mr, mb, ml, p, px, py, pt, pr, pb, pl, sx, sy }: SpacingModifier): string =>
    classMap({
      [`p-${p}`]: p,
      [`pt-${pt}`]: pt,
      [`pl-${py}`]: py,
      [`pb-${pb}`]: pb,
      [`pr-${pr}`]: pr,
      [`px-${px}`]: px,
      [`py-${pl}`]: pl,
      [`m-${m}`]: m,
      [`mt-${mt}`]: mt,
      [`ml-${ml}`]: ml,
      [`mb-${mb}`]: mb,
      [`mr-${mr}`]: mr,
      [`mx-${mx}`]: mx,
      [`my-${my}`]: my,
      [`space-x-${sx}`]: sx,
      [`space-y-${sy}`]: sy
    }),
  clean: ({ p, pt, py, pb, pr, px, pl, m, mt, ml, mb, mr, mx, my, sx, sy, ...props }: SpacingModifier) => props
};

export default modifier;
