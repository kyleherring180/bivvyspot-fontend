import {
    Card,
    CardMedia,
    CardContent,
    Typography,
} from '@mui/material';

interface BlogPostCardProps {
    title: string;
    summary: string;
    image: string;
    onNavigate: () => void; // Renamed to clarify the navigation intent
}

function BlogPostCard({ title, summary, image, onNavigate }: BlogPostCardProps) {
    return (
        <Card sx={{ borderRadius: 2, boxShadow: 4 }}>
            {/* Make the image clickable */}
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt={title}
                sx={{ cursor: 'pointer' }} // Add a pointer cursor to indicate it's clickable
                onClick={onNavigate} // Navigate to the post when clicked
            />
            <CardContent>
                <Typography variant="h6" component="h2">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
                    {summary}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default BlogPostCard;
