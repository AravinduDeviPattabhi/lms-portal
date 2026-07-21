import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./Layout.css";
type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">

    <Navbar />

    <div className="content">

        <Sidebar />

        <main className="main">
            {children}
        </main>

    </div>

</div>
  );
}

export default Layout;