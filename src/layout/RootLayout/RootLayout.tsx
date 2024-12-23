import Footer from "../../components/Footer/Footer.tsx";
import Header from "../../components/Header/Header.tsx";
import RecipePage from "../../pages/RecipePage/RecipePage.tsx";

export default function RootLayout() {
  return (
      <div className="flex flex-col min-h-screen">
        <Header/>
        <main className="flex-1">
          <div className="container mx-auto py-6">
            <RecipePage />
          </div>
        </main>
        <Footer />
      </div>
  )
}