import React from 'react'
import Feature1 from "../../utils/images/features/01.jpg";
import Feature2 from "../../utils/images/features/02.jpg";
import Feature3 from "../../utils/images/features/03.jpg";
import Feature4 from "../../utils/images/features/04.jpg";
import Feature5 from "../../utils/images/features/05.jpg";

const Features = () => {
  return (
      <section id="features">
  <div class="container">
    <div class="col-md-8 col-md-offset-2">
      <div class="heading">
        <h2>AWESOME FEATUR<span>ES</span></h2>
        <div class="line"></div>
        <p><span><strong>L</strong></span>orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam</p>
      </div>
    </div>
    <ul class="nav nav-tabs" role="tablist">
      <li role="presentation" class="active"><a href="#tab-1" role="tab" data-toggle="tab"><i class="fa fa-paper-plane"></i></a></li>
      <li role="presentation"><a href="#tab-2" role="tab" data-toggle="tab"><i class="fa fa-laptop"></i></a></li>
      <li role="presentation"><a href="#tab-3" role="tab" data-toggle="tab"><i class="fa fa-code"></i></a></li>
      <li role="presentation"><a href="#tab-4" role="tab" data-toggle="tab"><i class="fa fa-th-large"></i></a></li>
      <li role="presentation"><a href="#tab-5" role="tab" data-toggle="tab"><i class="fa fa-file-image-o"></i></a></li>
    </ul>
    <div class="tab-content">
      <div role="tabpanel" class="tab-pane fade in active feat-sec" id="tab-1">
        <div class="col-md-6 tab">
          <h5>Web Design</h5>
          <div class="line"></div>
          <div class="clearfix"></div>
          <p class="feat-sec">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing<br />
          </p>
          <p class="feat-sec-1">Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound</p>
        </div>
        <div class="col-md-6 tab-img"><img src={Feature1} class="img-responsive" alt="website template image" /></div>
      </div>
      <div role="tabpanel" class="tab-pane fade feat-sec" id="tab-2">
        <div class="col-md-6 tab">
          <h5>Graphic Design</h5>
          <div class="line"></div>
          <div class="clearfix"></div>
          <p class="feat-sec">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing<br />
          </p>
          <p class="feat-sec-1">Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound</p>
        </div>
        <div class="col-md-6 tab-img"><img src={Feature2} class="img-responsive" alt="website template image" /></div>
      </div>
      <div role="tabpanel" class="tab-pane fade feat-sec" id="tab-3">
        <div class="col-md-6 tab">
          <h5>Web Development</h5>
          <div class="line"></div>
          <div class="clearfix"></div>
          <p class="feat-sec">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing<br />
          </p>
          <p class="feat-sec-1">Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound</p>
        </div>
        <div class="col-md-6 tab-img"><img src={Feature3} class="img-responsive" alt="website template image" /></div>
      </div>
      <div role="tabpanel" class="tab-pane fade feat-sec" id="tab-4">
        <div class="col-md-6 tab">
          <h5>Responsive Design</h5>
          <div class="line"></div>
          <div class="clearfix"></div>
          <p class="feat-sec">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing<br />
          </p>
          <p class="feat-sec-1">Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound</p>
        </div>
        <div class="col-md-6 tab-img"><img src={Feature4} class="img-responsive" alt="website template image" /></div>
      </div>
      <div role="tabpanel" class="tab-pane fade feat-sec" id="tab-5">
        <div class="col-md-6 tab">
          <h5>Creative Gallery</h5>
          <div class="line"></div>
          <div class="clearfix"></div>
          <p class="feat-sec">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing<br />
          </p>
          <p class="feat-sec-1">Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound</p>
        </div>
        <div class="col-md-6 tab-img"><img src={Feature5}class="img-responsive" alt="website template image" /></div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Features
