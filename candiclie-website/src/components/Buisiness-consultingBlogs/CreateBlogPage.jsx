import React, { useState } from 'react';
import './BusinessBlog.css';

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

    const [submitStatus, setSubmitStatus] = useState(null);
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


        const data = new FormData();
        data.append('blogTitle', formData.blogTitle);
        data.append('blogContent', formData.blogContent);
        data.append('authorName', formData.authorName);
        data.append('file', formData.file);
        data.append('fullName', formData.fullName);
        data.append('email', formData.email);
        data.append('phoneNumber', formData.phoneNumber);
        data.append('socialMediaProfile', formData.socialMediaProfile);

        try {
            const response = await fetch('http://localhost:5001/submit-blog', {
                method: 'POST',
                body: data
            });

            const result = await response.json();

            if (response.ok) {
                setSubmitStatus('Blog successfully posted!');
                console.log('Success:', result);
            } else {
                setSubmitStatus(`Error: ${result.error}`);
                console.error('Error:', result);
            }
        } catch (error) {
            setSubmitStatus('Error posting the blog.');
            console.error('Request error:', error);
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
                    />
                </div>

                <div className='fieldGroup'>
                    <label>Blog Content</label>
                    <textarea
                        name="blogContent"
                        value={formData.blogContent}
                        onChange={handleChange}
                        className='textarea'
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
                {submitStatus && <p style={{
                    color: 'green',
                    marginBottom: '10px',
                    fontSize: '20px'
                }}>{submitStatus}</p>}
                <button type="submit" className='button' >Post Blog</button>


            </form>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '600px',
        margin: 'auto',
        padding: '20px',
        fontFamily: 'poppins, san-serif'
    },
};

export default CreateBlogPage;
