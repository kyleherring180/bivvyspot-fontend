import { Container, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import BlogPostCard from './BlogPostCard';
import { useNavigate } from 'react-router-dom';

interface BlogPost {
    id: number;
    title: string;
    summary: string;
    image: string;
}

const blogPosts: BlogPost[] = [
    { id: 1, title: 'Hiking the Alps', summary: 'Explore the breathtaking Alps.', image: 'src/assets/images/alps.jpg' },
    { id: 2, title: 'Trail Running', summary: 'Tips for trail running enthusiasts.', image: 'src/assets/images/alps.jpg' },
    { id: 3, title: 'Climbing Adventures', summary: 'Discover the thrill of climbing.', image: 'src/assets/images/alps.jpg' },
];

function BlogPostList() {
    const navigate = useNavigate();

    const handleNavigate = (id: number) => {
        navigate(`/post/${id}`); // Navigate to the post details page
    };

    return (
        <Container sx={{ marginTop: 4, height: '100%' }}>
            <Grid container spacing={2} sx={{ height: '100%' }}>
                {/* Left Pane */}
                <Grid size="grow">
                    <Box
                        sx={{
                            backgroundColor: '',
                            height: '100%',
                            minHeight: '100%',
                        }}
                    >
                        {/* Left pane content */}
                    </Box>
                </Grid>

                {/* Middle Column */}
                <Grid
                    sx={{
                        flexDirection: 'column',
                        justifyContent: 'center', // Centers content vertically
                        alignItems: 'center', // Centers content horizontally
                        height: '100%',
                        minWidth: 600
                    }}
                >
                    {blogPosts.map((post) => (
                        <Box key={post.id} 
                             sx={{ 
                                 marginBottom: 4,
                                 justifyContent: 'center', // Centers content vertically
                                 alignItems: 'center', // Centers content horizontally
                                 height: '100%',
                                 minWidth: 600
                        }}>
                            <BlogPostCard
                                title={post.title}
                                summary={post.summary}
                                image={post.image}
                                onNavigate={() => handleNavigate(post.id)} // Pass navigation handler
                            />
                        </Box>
                    ))}
                </Grid>

                {/* Right Pane */}
                <Grid size="grow">
                    <Box
                        sx={{
                            backgroundColor: '',
                            height: '100%',
                            minHeight: '100vh',
                        }}
                    >
                        {/* Right pane content */}
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default BlogPostList;