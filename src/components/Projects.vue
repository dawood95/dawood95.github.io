<template>
  <div>
    <div class="content">
      <p class="is-size-4">Stuff I have worked on</p>
    </div>
    <masonry :cols="{default: 4, 1024: 3, 768: 1}" :gutter="{default: '15px'}">
      <div class="card has-background-light">
        <div class="card-image">
          <figure class="image">
            <img src="@/assets/frankfurt.gif" alt="Cool gif of demo">
          </figure>
        </div>
        <div class="card-content">
          <p class="title is-size-5 has-text-weight-medium">Micron @ Frankfurt Auto Show '19 </p>
          <p>Application created to demonstrate compute capabilites of FPGA based deep learning accelerator in ADAS units. Uses pose estimation, gesture  recognition and face identification.</p>
        </div>
      </div>
      <div class="card has-background-light">
        <div class="card-image">
          <figure class="image">
            <img src="@/assets/lane.gif" alt="Lane">
          </figure>
        </div>
        <div class="card-content">
          <p class="title is-size-5 has-text-weight-medium">Lane Prediction</p>
          <div class="subtitle buttons">
            <a target="_blank" class="button is-small is-dark" disabled><span class="icon"><i class="fab fa-github"></i></span><span>Coming soon</span></a>
            <span class="button is-small is-warning" disabled>Ongoing work</span>
          </div>
          <p>Experiments to create deep neural network to predict lane markings as heatmaps using Berkley Deep Drive dataset. Preliminary results can be seen in the gif.</p>
        </div>
      </div>
      <div class="card has-background-light">
        <div class="card-image">
          <figure class="image">
            <img src="@/assets/compression.gif" alt="Compression">
          </figure>
        </div>
        <div class="card-content">
          <p class="title is-size-5 has-text-weight-medium">Video Compression</p>
          <div class="subtitle buttons">
            <a target="_blank" class="button is-small is-dark" disabled><span class="icon"><i class="fab fa-github"></i></span><span>Coming soon</span></a>
            <span class="button is-small is-warning" disabled>Ongoing work</span>
          </div>
          <p>Experiments to create deep neural network for video compression similar to <a href="wave.one" target="_blank">wave.one</a>. My excuse to mess around with GANs. The above gif uses about ~15% of the original data to reconstruct</p>
          <em class="is-size-7">Looks good only because it is downscaled</em>
        </div>
      </div>
      <div class="card has-background-light">
        <div class="card-image">
          <figure class="image">
            <img src="@/assets/facekeypoints.gif" alt="Face keypoints">
          </figure>
        </div>
        <div class="card-content">
          <p class="title is-size-5 has-text-weight-medium">Face Landmark Prediction</p>
          <div class="subtitle buttons">
            <a target="_blank" class="button is-small is-dark" href="https://github.com/dawood95/face-keypoints"><span class="icon"><i class="fab fa-github"></i></span><span>Source</span></a>
          </div>
          <p>Deep neural network for one-shot multi-person face landmark estimation.</p>
        </div>
      </div>
      <div class="card has-background-light">
        <div class="card-image">
          <figure class="image">
            <img src="@/assets/nnlab.png" alt="NNLAB">
          </figure>
        </div>
        <div class="card-content">
          <p class="title is-size-5 has-text-weight-medium">nnLab: ONNX Explorer</p>
          <div class="subtitle buttons">
            <a target="_blank" href="https://dawood95.github.io/nnlab" class="button is-small is-dark"><span class="icon"><i class="fas fa-link"></i></span><span>Try it</span></a>
            <a target="_blank" href="https://github.com/dawood95/nnlab" class="button is-small is-dark"><span class="icon"><i class="fab fa-github"></i></span><span>Source</span></a>
          </div>
          <p>Tool to interactively visualize the compute and memory profile of a neural network. Built as the final project for ECE 695: Visual Analytics at Purdue.</p>
          <em class="is-size-7">Not all layers are supported yet. You can contribute if you want <span classs="icon"><i class="far fa-smile-wink"></i></span></em>
        </div>
      </div>
      <div class="card has-background-light">
        <div class="card-content">
          <p class="title is-size-5 has-text-weight-medium">PyTorch Profiler</p>
          <div class="subtitle buttons">
            <a target="_blank" href="https://github.com/e-lab/pytorch-toolbox/tree/master/profiler" class="button is-small is-dark"><span class="icon"><i class="fab fa-github"></i></span><span>Source</span></a>
          </div>
          <p>Tool to count FLOPS and Params for a given PyTorch model using forward hooks.</p>
        </div>
      </div>
      <div class="card has-background-light">
        <div class="card-image">
          <figure class="image">
            <img src="@/assets/d3mq.png" alt="Poster">
          </figure>
        </div>
        <div class="card-content">
          <p class="title is-size-5 has-text-weight-medium">D3MQ: 3D Scanning Quadcopter</p>
          <div class="subtitle buttons">
            <a href="https://github.com/dawood95/SeniorDesign" target="_blank" class="button is-small is-dark"><span class="icon"><i class="fab fa-github"></i></span><span>Source</span></a>
            <a href="https://youtu.be/jXt1Q5nNIrY" target="_blank" class="button is-small is-dark"><span class="icon"><i class="fas fa-video"></i></span><span>Calibration attempt</span></a>
          </div>
          <p>3D Scanning Quadcopter built during Purdue ECE Senior Design. Uses Intel Realsense to capture RGBD data and SLAM to build 3D pointcloud map. Runs wirelessly over a ROS based system using the Minnowboard to communicate with the base station. Has primitive autonomous features such as obstacle avoidance.</p>
        </div>
      </div>
      <div class="card has-background-light">
        <div class="card-image">
          <figure class="video-container">
            <iframe width="100%" src="https://www.youtube.com/embed/0HHRTMiPMwY" style="height: 240px;" frameborder="0" allowfullscreen></iframe>
          </figure>
        </div>
        <div class="card-content">
          <p class="title is-size-5 has-text-weight-medium">Assitive hat for the blind</p>
          <p>Hat with multiple ultrasonic modules connected to a vibrating arm band to warn users of obstacles or changes in elevation.</p>
        </div>
      </div>
    </masonry>
  </div>
</template>

<script>

export default {
  name: 'Projects',
}

</script>
