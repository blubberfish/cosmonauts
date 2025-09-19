import type { ComponentType, FunctionComponent } from "react";

const WHITE_SPACE = " ";

function withBaseButtonStyle<
  Props extends { className?: string } = { className?: string }
>(Component: ComponentType<Props>): FunctionComponent<Props> {
  return (props) => (
    <Component {...props} className={["px-3 py-1 rounded hover:ring-4 hover:ring-blue-300", props.className].join(WHITE_SPACE)} />
  );
}

export function withRoundedButtonStyle<
  Props extends { className?: string } = { className?: string }
>(Component: ComponentType<Props>): FunctionComponent<Props> {
  const EnhancedComponent = withBaseButtonStyle(Component);
  return (props: Props) => (
    <EnhancedComponent
      {...props}
      className={["rounded-full", props.className].join(WHITE_SPACE)}
    />
  );
}
