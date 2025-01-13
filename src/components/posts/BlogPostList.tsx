import { Container, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import BlogPostCard from './BlogPostCard';

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
    const handleReadMore = (id: number) => {
        console.log(`Navigate to post ${id}`);
        // Implement navigation logic here
    };

    return (
        <Container sx={{ marginTop: 4, height: '100vh' }}>
            <Grid container spacing={2} sx={{ height: '100%' }}>
                {/* Left Pane */}
                <Grid size="grow">
                    <Box
                        sx={{
                            backgroundColor: '#f5f5f5',
                            height: '100%',
                            minHeight: '100vh',
                        }}
                    >
                        {/* Left pane content */}
                    </Box>
                </Grid>

                {/* Middle Column */}
                <Grid size={6}>
                    {blogPosts.map((post) => (
                        <Box key={post.id} sx={{ marginBottom: 4 }}>
                            <BlogPostCard
                                title={post.title}
                                summary={post.summary}
                                image={post.image}
                                onReadMore={() => handleReadMore(post.id)}
                            />
                        </Box>
                    ))}
                </Grid>

                {/* Right Pane */}
                <Grid size="grow">
                    <Box
                        sx={{
                            backgroundColor: '#f5f5f5',
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