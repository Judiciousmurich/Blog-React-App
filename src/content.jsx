

// Main component - Content
const Content = ({title, content}) => {
    // Sample data for blog posts
    

    return(
        <div className="content">
            <h2 className="title">{title}</h2>
            <p className="text-content">{content}</p>
        </div>
    )
}
export default  Content