import { createElement as h } from 'https://esm.sh/react';
import { createRoot } from 'https://esm.sh/react-dom';

// HTML = Hyper Text Markup Language 마크업

// JavaScript 마크업
// 함수 이름이 h인 이유 : Hyper Script Markup Language
// h()

const listData = {
  items: [],
};

const reactiveListData = new Proxy(listData, {
  get(target, prop) {
    console.log('[GET]');

    return target[prop];
  },

  set(target, prop, newValue) {
    const oldValue = target[prop];

    target[prop] = newValue;

    console.log('[SET] update', JSON.stringify(newValue));

    console.log('리-렌더링(re-render)');
    render();

    return true;
  },
});

const container = document.getElementById('root');

const reactDomRoot = createRoot(container);

function render() {
  const children = reactiveListData.items.map(({ id, title }) => {
    const reactElement = h(
      'li',
      {
        key: id,
        className: 'item',
      },
      h('img', {
        src: `/architectures/architecture-${id}.jpg`,
        alt: '',
      }),
      h(
        'span',
        {
          className: 'content',
        },
        title
      ),
      h(
        'button',
        {
          type: 'button',
          title: '아이템 이동 (위/아래 화살표 키 활용)',
        },
        h('img', {
          src: '/icons/handle.svg',
          alt: '아이템 이동 (위/아래 화살표 키 활용)',
        })
      )
    );

    return reactElement;
  });

  const list = h(
    'ul',
    { className: 'architectures', lang: 'en' },

    children
  );

  reactDomRoot.render(list);
}

function unmount() {
  reactDomRoot.unmount();
}

render();

setTimeout(() => {
  reactiveListData.items = [
    ...reactiveListData.items,
    {
      id: 1,
      title: 'Climatology',
    },
  ];
}, 1000);
setTimeout(() => {
  reactiveListData.items = [
    ...reactiveListData.items,
    {
      id: 2,
      title: 'History of Architecture',
    },
  ];
}, 2000);
setTimeout(() => {
  reactiveListData.items = [
    ...reactiveListData.items,
    {
      id: 3,
      title: 'Graphics',
    },
  ];
}, 3000);

setTimeout(() => {
  reactiveListData.items = [
    ...reactiveListData.items,
    {
      id: 4,
      title: 'Building design',
    },
  ];
}, 4000);
