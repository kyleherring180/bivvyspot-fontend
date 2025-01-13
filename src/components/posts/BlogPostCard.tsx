import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    Box,
} from '@mui/material';

interface BlogPostCardProps {
    title: string;
    summary: string;
    image: string;
    onReadMore: () => void;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ title, summary, image, onReadMore }) => {
    return (
        <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 4 }}>
            <CardMedia component="img" height="140" image={image} alt={title} />
            <CardContent>
                <Typography variant="h6" component="h2">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
                    {summary}
                </Typography>
                <Box sx={{ marginTop: 2, textAlign: 'center' }}>
                    <Button variant="contained" color="primary" onClick={onReadMore}>
                        Read More
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default BlogPostCard;
