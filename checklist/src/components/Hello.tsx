import * as React from 'react';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}

function Hello ({name, enthusiasmLevel =1 }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error ('You could be a little more enthusiastic. :D');
  }
  return (
  <div className="Hello">
    <div className="Greeting">
    Hello {name + getExclamationMarks(enthusiasmLevel)}
    </div>
  </div>
  );
}

export default Hello;
