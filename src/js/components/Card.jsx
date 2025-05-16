const Card = () => {
    return (
        <div className="ms-auto d-flex flex-column justify-content-center gap-3" style={{ width: "18rem" }}>
            <img src="https://fastly.picsum.photos/id/44/200/300.jpg?hmac=XVdwVrJGHwXEzGWC6cZoztYj9nazQEbeWv9VrPmoqps" alt="paisaje" />
                <div className="card-body">
                    <h5 className="card-title text-center">Card title</h5>
                    <p className="card-text text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta accusamus tempora inventore in earum. Fugiat similique soluta amet illum sint asperiores nisi, dolore neque est a autem deleniti. Accusamus, consequatur.</p>
                    <a href="#" className="btn btn-primary d-block mx-auto">Find Out More!</a>
                </div>
        </div>
    );
}

export default Card;