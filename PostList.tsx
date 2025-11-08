import React, { useEffect, useState } from 'react';
import PostItem from './PostItem';
import { Post } from '../types/post';
import { fetchPosts } from '../services/api';

const PostList: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const data = await fetchPosts();
                setPosts(data);
            } catch (err) {
                setError('Failed to fetch posts');
            } finally {
                setLoading(false);
            }
        };

        getPosts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            {posts.map(post => (
                <PostItem key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostList;