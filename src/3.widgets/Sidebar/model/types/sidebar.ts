export interface ISidebarItem {
  path: string;
  title: string;
  active: boolean;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}
