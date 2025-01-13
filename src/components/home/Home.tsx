import Header from "../layout/Header.tsx";
import BlogPostList from "../posts/BlogPostList.tsx";
import Footer from "../layout/Footer.tsx";

function Home() {
    
    return (
        <div>
            <Header/>
            <BlogPostList/>
            <Footer/>
        </div>
    )
}

export default Home;