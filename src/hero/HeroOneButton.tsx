import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1
      style={{ textShadow: '2px 2px 3px white' }}
      className="whitespace-pre-line text-5xl font-bold leading-hero text-gray-900"
    >
      {props.title}
    </h1>
    <div
      style={{ textShadow: '0px 0px 3px white' }}
      className="mb-16 mt-4 text-3xl text-slate-900"
    >
      {props.description}
    </div>

    {props.button}
  </header>
);

export { HeroOneButton };
