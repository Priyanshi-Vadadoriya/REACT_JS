import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';


function App() {
    const [showModal, setShowModal] = useState(false);
  
    const openModal = () => {
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };
  
  return (
    <div className="container">
  <div className="row">
    <div className="col-4" style={{ height: "100%" }}>
      <div style={{ height: "50%" }} className='mb-3'  onClick={openModal}>
        <img src="https://i.pinimg.com/736x/81/b0/a7/81b0a72b0ed7d5a7f4ff44be6e0b1725.jpg" className="img-fluid" />
      </div>
      <div style={{ height: "50%" }}  onClick={openModal}>
        <img src="https://e0.pxfuel.com/wallpapers/880/707/desktop-wallpaper-miscellanea-miscellaneous-design-illumination-furniture-graphics-lighting-living-room-balcony.jpg" className="img-fluid" />
      </div>
    </div>

    <div className="col-8"  onClick={openModal}>
      <img src="https://c4.wallpaperflare.com/wallpaper/452/939/736/sofa-furniture-chair-cushion-wallpaper-preview.jpg" className="img-fluid" style={{ height: "100%" }} />
    </div>
  </div>
  <div className="row mt-4">
        <div className="col-2"  onClick={openModal}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX4OiFd_WNZ3cb61CNsNjwXuvIRrlzLz7oLQ&usqp=CAU" className="img-fluid" />
        </div>
        <div className="col-2"  onClick={openModal}>
          <img src="https://cityfurnish.com/blog/wp-content/uploads/2022/02/pexels-mw-studios-90317.jpg" className="img-fluid" />
        </div>
        <div className="col-2"  onClick={openModal}>
          <img src="https://stylesatlife.com/wp-content/uploads/2020/04/contemporary-italian-bedroom-furniture.jpg" className="img-fluid" />
        </div>
        <div className="col-2"  onClick={openModal}>
          <img src="https://cdn.pixabay.com/photo/2016/08/07/00/44/bed-1575491_640.jpg" className="img-fluid" />
        </div>
        <div className="col-2"  onClick={openModal}>
          <img src="https://cdn.pixabay.com/photo/2021/10/06/15/05/bathroom-6686057_1280.jpg  " className="img-fluid" />
        </div>
        <div className="col-2" onClick={openModal}>
          <img src="https://i.pinimg.com/736x/f8/12/af/f812afa98c94a9aece8969225400f3cf.jpg" className="img-fluid" />
        </div>
      </div>
      <Modal show={showModal} onHide={closeModal} dialogClassName="modal-fullscreen">
        <Modal.Header closeButton />
        <Modal.Body>
        <div className="row">
        <div className="col-3">
          <img src="https://c4.wallpaperflare.com/wallpaper/660/412/904/new-modern-bedroom-wallpaper-preview.jpg" className="img-fluid" />
        </div>
        <div className="col-3">
          <img src="https://c4.wallpaperflare.com/wallpaper/840/550/343/candles-chandelier-bath-modern-wallpaper-preview.jpg" className="img-fluid" />
        </div>
        <div className="col-3">
          <img src="https://woodentwist.com/cdn/shop/products/HomeyElDoradoBedroomHD-8008_800x505.jpg?v=1689858079s" className="img-fluid" />
        </div>
        <div className="col-3">
          <img src="https://as1.ftcdn.net/v2/jpg/05/19/87/94/1000_F_519879428_YvKIhthriEEKqAroqF5nsdHuBWabvP2D.jpg" className="img-fluid" />
        </div> 
      </div>
      <div className="row mt-4">
            <div className="col-4" style={{ height: "100%" }}>
              <div style={{ height: "50%" }} className='mb-3'>
                <img src="https://mlslheemifw5.i.optimole.com/cXhkGIo.fod5~622f3/w:1500/h:1000/q:90/https://www.markatosdesign.com/wp-content/uploads/2020/03/1X9A1271Bsmfixed-1.jpg" className="img-fluid" />
              </div>
              <div style={{ height: "50%" }} >
                <img src="https://media.istockphoto.com/id/1276846269/photo/luxury-modern-renovated-apartment-with-closets-walk-ins-very-well-staged.jpg?s=612x612&w=0&k=20&c=hfMrWaDHOuAzv5vr6HPGiK4nXai3MRfeSWL6wKC4UaM=" className="img-fluid" />
              </div>
            </div>

          <div className="col-8">
            <img src="https://w0.peakpx.com/wallpaper/842/13/HD-wallpaper-luxury-bedroom-interior-classic-bedroom-violet-bedroom-bedroom-design.jpg" className="img-fluid" style={{ height: "100%" }} />
          </div>
      </div>
      <div className="row mt-4">
        <div className="col-3">
          <img src="https://w.forfun.com/fetch/b5/b5f1452cdb3791ac1ca4711bdf554a24.jpeg" className="img-fluid" />
        </div>
        <div className="col-3">
          <img src="https://w0.peakpx.com/wallpaper/475/33/HD-wallpaper-bedroom-gray-style-interior-modern-bedroom-interior-design-black-table-lamps-stylish-interior.jpg" className="img-fluid" />
        </div>
        <div className="col-3">
          <img src="https://w0.peakpx.com/wallpaper/750/670/HD-wallpaper-luxurious-bathroom-interior-classic-style-blue-bathroom-luxurious-bathroom-furniture-modern-stylish-interior-fireplace-in-the-bathroom.jpg" className="img-fluid" />
        </div>
        <div className="col-3">
          <img src="https://c4.wallpaperflare.com/wallpaper/350/505/107/bathroom-furniture-bathroom-fixtures-mirrors-wallpaper-preview.jpg" className="img-fluid" />
        </div> 
      </div>
      <div className="row mt-4">
        <div className="col-8">
            <img src="https://marcusbath.com/wp-content/uploads/2023/07/The-Ultimate-Guide-to-Hotel-Bathroom-Design-Ideas.jpg" className="img-fluid" style={{ height: "100%" }} />
        </div>
        <div className="col-4" style={{ height: "100%" }}>
            <div style={{ height: "50%" }} className='mb-3'>
              <img src="https://images.unsplash.com/photo-1617104611622-d5f245d317f0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlZHJvb20lMjBmdXJuaXR1cmV8ZW58MHx8MHx8fDA%3D" className="img-fluid" />
            </div>
            <div style={{ height: "50%" }} >
              <img src="https://img.freepik.com/premium-photo/modern-bathroom-interior-with-beige-walls-marble-basin-with-double-mirror-black-bathtub-grey-concrete-floorminimalist-bathroom-with-modern-furniture-overlooks-tree-landscape-view3d-render_695590-913.jpg" className="img-fluid" className="img-fluid" />
            </div>
          </div>
        </div>
      <div className="row mt-4">
        <div className="col-3">
          <img src="https://w.forfun.com/fetch/b5/b5f1452cdb3791ac1ca4711bdf554a24.jpeg" className="img-fluid" />
        </div>
        <div className="col-3">
          <img src="https://www.shutterstock.com/image-photo/bed-between-ladder-plant-green-600nw-1070402948.jpg" className="img-fluid" />
        </div>
        <div className="col-3">
          <img src="https://i.pinimg.com/736x/44/05/74/440574ea7a18341596180a2e846f3516.jpg" className="img-fluid" />
        </div>
        <div className="col-3">
          <img src="https://cdn.pixabay.com/photo/2021/10/06/15/05/bathroom-6686057_1280.jpg" className="img-fluid" />
        </div> 
      </div>
      
        </Modal.Body>
      </Modal>
</div>


  );
  
}

export default App;
