declare module "react-full-page" {
  import { ReactNode, ComponentType } from "react";

  export interface FullPageProps {
    children: ReactNode;
  }

  export interface SlideProps {
    children: ReactNode;
  }

  export const FullPage: ComponentType<FullPageProps>;
  export const Slide: ComponentType<SlideProps>;
}
