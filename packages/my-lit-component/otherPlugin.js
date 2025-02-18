const plugin = (opts = {}) => {
  return {
    postcssPlugin: "postcss-shadow-dom-property",
    prepare(result) {
      return {
        Once(root, { result }) {
          const propertyRules = [];
          // AST 순회하며 @property 규칙 찾기
          root.walkAtRules("property", (rule) => {
            // Shadow DOM 내부인지 확인 (예: 특정 선택자 패턴으로 감지)
            let isInsideShadowDOM = false;
            let parent = rule.parent;
            while (parent) {
              if (parent.selector && parent.selector.includes(":host")) {
                isInsideShadowDOM = true;
                break;
              }
              parent = parent.parent;
            }

            if (isInsideShadowDOM) {
              // Shadow DOM 내부 @property 규칙 저장 후 제거
              propertyRules.push(rule.clone());
              rule.remove();
            }
          });

          // 최상위 문서 스타일에 추가
          if (propertyRules.length > 0) {
            const globalRule = postcss.root();
            propertyRules.forEach((rule) => globalRule.append(rule));
            root.prepend(globalRule);
          }
        },
      };
    },
  };
};
export default plugin;
