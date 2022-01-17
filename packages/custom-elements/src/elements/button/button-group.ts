import { dom } from '../../lib/create-element';
import { classMap, define } from '../../lib/custom-element';

export type Props = Partial<Omit<HTMLDivElement, 'dataset'>> & {
  dataset: {
    append?: string;
  };
};

const getClassName = ({ dataset }: Props) => classMap('inline-flex rounded-md shadow-sm', dataset.append);

define<Props>('ui-button-group', {
  props: {
    dataset: {
      append: undefined
    }
  },
  onAttributeChanged(name, prev, curr, { dataset, root }) {
    root.className = getClassName({ dataset });
  },
  onConnected({ children }) {
    for (let idx = 0; idx < (children ?? []).length; idx++) {
      children[idx].setAttribute('data-group', idx === 0 ? 'first' : idx === children.length - 1 ? 'last' : '');
    }
  },
  template: ({ dataset }) => [
    dom(
      'link',
      { rel: 'stylesheet', href: '/tailwind.css' },
      dom('div', { id: 'root', className: getClassName({ dataset }) }, dom('slot'))
    )
  ]
});
