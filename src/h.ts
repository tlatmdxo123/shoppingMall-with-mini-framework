type NodeType = {
  type: string;
  props: any;
  children: Node[];
};

type Node = NodeType | string;

export function h(type: string, props: any, ...children: Node[]) {
  return { type, props, children };
}
