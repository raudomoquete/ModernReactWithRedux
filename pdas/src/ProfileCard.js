function ProfileCard({ title, handle, image }) {
    //function ProfileCard(props) {
    // before
    /* const title = props.title;
    const handle = props.handle */

    //javaScript destructuring feature, tambien se puede implementar arriba justo como está ahora
    //const { title, handle } = props;
    
    return (
        <div>
            <img src={image} alt="pds logo" />
            <div>Title is {title}</div>
            <div>Handle is {handle}</div>
      {/*       <div>Title is props.title</div>
            <div>Handle is props.handle</div> */}
        </div>
    );
}

export default ProfileCard;