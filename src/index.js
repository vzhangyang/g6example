import G6 from '@antv/g6';

const data = {
  nodes: [
    {
      id: 'node1',
      label: 'Milky Way(银河系)',
      x: 150,
      y: 250,
    },
    {
      id: 'node2',
      label: 'Solar system(太阳系)',
      x: 400,
      y: 350,
    },
    {
      id: 'node3',
      label: 'Centaurus(半人马座)',
      x: 400,
      y: 120,
    },
    {
      id: 'node4',
      label: '地球',
      x: 650,
      y: 470,
    },
    {
      id: 'node5',
      label: '水星',
      x: 650,
      y: 260,
    }
  ],
  edges: [
    {
      source: 'node1',
      target: 'node2',
    },
    {
      source: 'node1',
      target: 'node3',
    },
    {
      source: 'node2',
      target: 'node4',
    },
    {
      source: 'node2',
      target: 'node5',
    },
  ],
};

const graph = new G6.Graph({
  container: 'mountNode',
  width: 2000,
  height: 2000,
  defaultNode: {
    type: 'circle',
    size: [200],
    color: '#5B8FF9',
    style: {
      fill: '#9EC9FF',
      lineWidth: 3,
    },
    labelCfg: {
      style: {
        fill: '#fff',
        fontSize: 20,
      },
    },
  },
  defaultEdge: {
    style: {
      stroke: '#e2e2e2',
    },
  },
});

/*const main = async () => {
  const response = await fetch(
    'https://gw.alipayobjects.com/os/basement_prod/6cae02ab-4c29-44b2-b1fd-4005688febcb.json',
  );
  const remoteData = await response.json();

  graph.data(remoteData); // 加载远程数据
  graph.render(); // 渲染
};
main();*/

graph.data(data);
graph.render();