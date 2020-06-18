import React, { FunctionComponent } from 'react';

interface Props {
  className: string;
  fanCount: string;
  id: string;
  mascot: string;
  mascotFacts: {
    count: string;
  };
  mythical: boolean;
  name: string;
  vs: boolean;
}

const Team: FunctionComponent<Props> = ({
  className,
  fanCount,
  id,
  mascot,
  mascotFacts,
  mythical,
  name,
  vs,
}) => {
  return (
    <div id={id} className={className}>
      <h2>{name}</h2>
      <p>Real-life Fans</p>
      <p>{fanCount}</p>
      <h3>Mascot</h3>
      {/* {mythical && <p>not real</p>} */}
      <p>{mascot}</p>
      <p>{mascotFacts.count}</p>
    </div>
  );
};

export default Team;
