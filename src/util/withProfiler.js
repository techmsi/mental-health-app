import React, { Profiler } from 'react';

export function withProfiler(WrappedComponent, name) {
  const renders = {};

  const logColors = {
    mount: 'font: 1.2rem monospace; color: tomato;',
    update: 'font: 1.2rem monospace; color: gold;',
    default: 'font: 1rem; color: skyblue;'
  };

  const componentName = WrappedComponent.displayName;
  console.debug('\nWrappedComponent', componentName);

  return class WithProfile extends React.Component {
    state = {
      name
    };

    clockPerformance = (
      profilerId,
      phase,
      actualTime,
      baseTime,
      startTime,
      commitTime
    ) => {
      const totalTime = commitTime - startTime;

      console.groupCollapsed(
        `%c[${phase}]%c${profilerId} (${totalTime.toFixed(2)})} rendered: ${
          renders[componentName]
        }`,
        logColors[phase],
        logColors.default
      );

      console.table({
        phase,
        totalTime,
        actualTime,
        baseTime,
        startTime,
        commitTime
      });

      console.debug('\nWrappedComponent(children)', this.props.children);
      console.groupEnd();
    };
    render() {
      renders[componentName] += 1;

      return (
        <Profiler id={this.state.name} onRender={this.clockPerformance}>
          <WrappedComponent {...this.props} />
        </Profiler>
      );
    }
  };
}
