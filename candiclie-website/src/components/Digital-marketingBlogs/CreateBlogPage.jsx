import React, { useState } from 'react';

function CreateBlogPage() {
    const [formData, setFormData] = useState({
        blogTitle: '',
        blogContent: '',
        authorName: '',
        file: null,
        fullName: '',
        email: '',
        phoneNumber: '',
        socialMediaProfile: ''
    });
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            file: e.target.files[0]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMessage('');
        setErrorMessage('');

        const data = new FormData();  // Create FormData object to send form data including the file
        data.append('blogTitle', formData.blogTitle);
        data.append('blogContent', formData.blogContent);
        data.append('authorName', formData.authorName);
        data.append('file', formData.file);  // Append file
        data.append('fullName', formData.fullName);
        data.append('email', formData.email);
        data.append('phoneNumber', formData.phoneNumber);
        data.append('socialMediaProfile', formData.socialMediaProfile);

        try {
            const response = await fetch('http://localhost:5000/create-blog', {
                method: 'POST',
                body: data
            });

            const result = await response.json();
            if (response.ok) {
                setSuccessMessage(result.message);
                setFormData({
                    blogTitle: '',
                    blogContent: '',
                    authorName: '',
                    file: null,
                    fullName: '',
                    email: '',
                    phoneNumber: '',
                    socialMediaProfile: ''
                });
            } else {
                setErrorMessage(result.errors ? result.errors.map(err => err.msg).join(', ') : 'Something went wrong');
            }
        } catch (error) {
            setErrorMessage('Failed to post the blog. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} className='form'>
                <h2 className='heading'>Create a Blog</h2>

                <div className='fieldGroup'>
                    <label>Blog Title</label>
                    <input
                        type="text"
                        name="blogTitle"
                        value={formData.blogTitle}
                        onChange={handleChange}
                        className='input'
                        required
                    />
                </div>

                <div className='fieldGroup'>
                    <label>Blog Content</label>
                    <textarea
                        name="blogContent"
                        value={formData.blogContent}
                        onChange={handleChange}
                        className='textarea'
                        required
                    />
                </div>

                <div className='fieldGroup'>
                    <label>Author Name</label>
                    <input
                        type="text"
                        name="authorName"
                        value={formData.authorName}
                        onChange={handleChange}
                        className='input'
                        required
                    />
                </div>

                <div className='fieldGroup'>
                    <label>Upload Image</label>
                    <input
                        type="file"
                        name="file"
                        onChange={handleFileChange}
                        className='input upload-image'
                    />
                </div>

                <h3 className='heading'>Your Details</h3>

                <div className='fieldGroup'>
                    <label>Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className='input'
                        required
                    />
                </div>

                <div className='fieldGroup'>
                    <label>Your Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className='input'
                        required
                    />
                </div>

                <div className='fieldGroup'>
                    <label>Phone Number</label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className='input'
                        required
                    />
                </div>

                <div className='fieldGroup'>
                    <label>Social Media Profile (optional)</label>
                    <input
                        type="text"
                        name="socialMediaProfile"
                        value={formData.socialMediaProfile}
                        onChange={handleChange}
                        className='input'
                    />
                </div>

                {successMessage && <p style={styles.success}>{successMessage}</p>}
                {errorMessage && <p style={styles.error}>{errorMessage}</p>}

                <button type="submit" className='button' disabled={loading}>
                    {loading ? 'Posting...' : 'Post Blog'}
                </button>
            </form>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '600px',
        margin: 'auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif'
    },
    success: {
        color: 'green',
        marginBottom: '10px',
        fontSize: '20px'
    },
    error: {
        color: 'red',
        marginBottom: '10px',
        fontSize: '20px'
    }
};

export default CreateBlogPage;
