import './App.css';
import Footer from './components/Footer';
import ITServicesPage from './components/ITServicesPage';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext';
import React, { useEffect } from 'react';
import RecruitmentPage from './components/RecruitmentPage';
import BusinessBlogMain from './components/Buisiness-consultingBlogs/BusinessBlogMain';
import DigitalMarketingMain from './components/Digital-marketingBlogs/DigitalMarketingMain';
import RecruitmentBlogMain from './components/RecruitmentBlogs/RecruitmentBlogMain';
import CarrierPage from './components/AllForms/CarrierPage';
import BusinessPage from './components/AllForms/BusinessPage';
import PartnershipPage from './components/AllForms/PartnershipPage';
import SignUpPage from './components/Register/pages/SignUpPage';
import LoginPage from './components/Register/pages/LoginPage';
import ForgotPassword from './components/Register/pages/ForgotPassword';
import VerifyCode from './components/Register/pages/VerifyCode';
import ResetPassword from './components/Register/pages/ResetPassword';
import VerifyEmailPage from './components/Register/pages/VerifyEmailPage';
import IntroductionPage from './components/Register/pages/IntroductionPage';
import CommonForm from './components/CommonForm';

// Component for redirecting to an HTML file
const RedirectToHTML = ({ file }) => {
  useEffect(() => {
    window.location.href = `${process.env.PUBLIC_URL}/${file}`;
  }, [file]);

  return null;
};

function AppContent() {
  const location = useLocation(); // Use location within the Router context

  // Define routes where Navbar and Footer should not appear
  const noNavFooterRoutes = [
    '/signup',
    '/login',
    '/forgot-password',
    '/verify-code',
    '/reset-password',
    '/verify-email',
    '/introduction',
  ];

  const shouldHideNavFooter = noNavFooterRoutes.includes(location.pathname);

  return (
    <div className="App">
      <div className="app-container">
        {!shouldHideNavFooter && <div className="sidebar"><Navbar /></div>}
        <div className="all-pages">
          <Routes>
            {/* Main Routes */}
            <Route path="/it-consulting" element={<ITServicesPage />} />
            <Route path="/recruitment" element={<RecruitmentPage />} />

            <Route path="/business-blog" element={<BusinessBlogMain />} />
            <Route path="/digital-blog" element={<DigitalMarketingMain />} />
            <Route path="/recruitment-blog" element={<RecruitmentBlogMain />} />

            <Route path="/career-form" element={<CarrierPage />} />
            <Route path="/business-form" element={<BusinessPage />} />
            <Route path="/partner-form" element={<PartnershipPage />} />

            <Route path="/common-form" element={<CommonForm />} />


            {/* HTML Redirections */}
            <Route path="/" element={<RedirectToHTML file="main.html" />} />
            <Route path="/home" element={<RedirectToHTML file="home.html" />} />
            <Route path="/about" element={<RedirectToHTML file="about-us.html" />} />
            <Route path="/career" element={<RedirectToHTML file="career.html" />} />
            <Route path="/partner" element={<RedirectToHTML file="partner.html" />} />
            <Route path="/blogs" element={<RedirectToHTML file="blog.html" />} />

            <Route path="digital-marketing" element={<RedirectToHTML file="digital_marketing.html" />} />
            <Route path="business-consulting" element={<RedirectToHTML file="Business_Consulting.html" />} />
            <Route path="/itRecruitment" element={<RedirectToHTML file="it-recruitment.html" />} />
            <Route path="/non-it-recruitment" element={<RedirectToHTML file="non-it-recruitment.html" />} />
            <Route path="/healthcare.html" element={<RedirectToHTML file="healthcare.html" />} />
            <Route path="/digital-marketing-blogs" element={<RedirectToHTML file="digital_marketing_blog.html" />} />

            {/* Register Pages */}
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/verify-code" element={<VerifyCode />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/verify-email" element={<VerifyEmailPage />} />
            <Route path="/introduction" element={<IntroductionPage />} />
          </Routes>
          {!shouldHideNavFooter && <Footer />}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
