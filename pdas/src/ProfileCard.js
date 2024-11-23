function ProfileCard({ title, handle, image, description }) {
    //function ProfileCard(props) {
    // before
    /* const title = props.title;
    const handle = props.handle */

    //javaScript destructuring feature, tambien se puede implementar arriba justo como está ahora
    //const { title, handle } = props;
    
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt="pds logo" />
                </figure>
            </div>

            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-4">{handle}</p>
                </div>
                <div className="content">{description}</div>
            </div>
           
      {/*       <div>Title is props.title</div>
            <div>Handle is props.handle</div> */}
        </div>
    );
}

export default ProfileCard;