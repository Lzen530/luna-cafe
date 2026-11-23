import './globals.css';

export const metadata = {
  title: '루나 카페 | 메뉴판',
  description: '루나 카페의 커피, 음료, 디저트 메뉴판',
};

export default function RootLayout({ children }) {
  return <html lang="ko"><body>{children}</body></html>;
}
