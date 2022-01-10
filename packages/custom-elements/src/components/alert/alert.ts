import { classMap, define } from '../../lib/custom-element';

export type DataSet = {
  append?: string;
  variant?: 'error' | 'success' | 'info' | 'contrast' | undefined;
};

const getClassNames = (data: DataSet) =>
  classMap(
    'flex justify-between items-center py-2 px-4 text-sm border rounded-xl shadow-sm',
    !data.variant
      ? 'text-content bg-contrast-50 border-contrast-300'
      : {
          'text-primary-content bg-primary-backdrop border-primary-focus': data.variant === 'info',
          'text-error-content bg-error-backdrop border-error-focus': data.variant === 'error',
          'text-success-content bg-success-backdrop border-success-focus': data.variant === 'success',
          'text-contrast-50 bg-contrast-800 border-contrast-700': data.variant === 'contrast'
        },
    data.append
  );

define<DataSet>('ce-alert', {
  data: {
    append: undefined,
    variant: undefined
  },
  onAttributeChanged(name, prev, curr, { dataset, root }) {
    root.className = getClassNames(dataset);
  },
  onConnected: ({ event, fire, remove }) => {
    event(
      'button',
      'click',
      () => {
        fire('close');
        remove();
      },
      { once: true }
    );
  },
  template: ({ dataset }) => /*html*/ `
    <link rel="stylesheet" href="/tailwind.css" />
    <div id="root" class="${getClassNames(dataset)}" role="alert">
      <div class="text-sm"><slot></slot></div>
      <button
        id="button"
        type="button"
        class="inline-flex items-center justify-center ml-2 -mr-2 p-0.5 h-8 w-8 text-current"
        data-collapse-toggle="alert"
        aria-label="Close">
        <span class="sr-only">Close</span>
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button>
    </div>
  `
});
