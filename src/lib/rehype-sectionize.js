/**
 * Rehype plugin to wrap h2 headings and their following siblings in section elements
 */
export function rehypeSectionize() {
  return (tree) => {
    function processChildren(parent) {
      if (!parent.children) return;

      const children = parent.children;
      const newChildren = [];
      let currentSection = null;

      for (let i = 0; i < children.length; i++) {
        const node = children[i];

        // Check if this is an h2 element
        if (node.type === 'element' && node.tagName === 'h2') {
          // If we have a current section, push it to newChildren
          if (currentSection) {
            newChildren.push(currentSection);
          }
          
          // Start a new section with this h2
          currentSection = {
            type: 'element',
            tagName: 'section',
            properties: {},
            children: [node]
          };
        } else if (currentSection) {
          // Add to current section
          currentSection.children.push(node);
        } else {
          // Before first h2, add directly to newChildren
          newChildren.push(node);
        }

        // Recursively process children of this node
        processChildren(node);
      }

      // Don't forget the last section
      if (currentSection) {
        newChildren.push(currentSection);
      }

      parent.children = newChildren;
    }

    processChildren(tree);
  };
}
