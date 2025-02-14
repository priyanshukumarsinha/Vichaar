const content = `
    <p style="line-height: 1.8; text-align: justify;">
        Vichaar is more than just a blogging site—it's a project built with passion, curiosity, and a deep desire to learn and create. 
        As a student exploring <span style="color: #0073e6; font-weight: bold;">full-stack web development</span>, I wanted to build something meaningful: a 
        place where anyone can share their thoughts, ideas, and experiences with the world.
    </p>

    <br>

    <p style="line-height: 1.8; text-align: justify;">
        The internet is filled with noise, but here, the focus is on <span style="color: #0073e6; font-weight: bold;">meaningful conversations</span>. 
        Whether you’re an aspiring writer, a tech enthusiast, or someone with a story to tell, this platform is designed to provide a 
        seamless and engaging experience for sharing knowledge and insights.
    </p>

    <br>


    <p style="line-height: 1.8; text-align: justify;">
        This journey has been one of growth, problem-solving, and innovation. I have explored modern web technologies, optimized user 
        experience, and built features that empower writers and readers alike.
    </p>

    <br>

    <p style="line-height: 1.8; text-align: justify;">
        <span style="color: #0073e6; font-weight: bold;">This platform is a reflection of my passion</span> for web development, technology, and 
        community-driven content. If you're interested in my work or want to connect, feel free to reach out on the links below.
    </p>
`;

const BlogHTMLContent = () => {
  return <div className="" dangerouslySetInnerHTML={{ __html: content }} />;
};

export default BlogHTMLContent;
