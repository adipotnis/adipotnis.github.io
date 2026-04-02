---
layout: single
title: ""
author_profile: true
---

## About Me

I'm a full-stack roboticist with experience across the entire stack — from hardware design and low-level control to perception and autonomy.

Currently, I'm a student at UIUC <img src="images/uiucfavicon.ico" alt="UIUC" width="16" style="vertical-align:middle;"> pursuing a MS in Computer Science with a focus on Robotics. I'm advised by <a href="http://daslab.illinois.edu/index.html#girish" target="_blank">Girish Chowdhary</a> at <a href="http://daslab.illinois.edu/index.html" target="_blank"> Distributed Autonomous Systems Lab</a>. My research is focused on Outdoor Navigation with Vision Language Action models and embodiment aware grounding for Vision Large Language Models.

Previously, I worked at <a href="https://www.earthsense.co/" target="_blank">Earthsense</a>, on hardware design, autonomy, and optimization for a 750kg payload AGV. My contributions included developing the lower-level control systems and implementing 4-wheel independent torque vectoring for the TerraMax Robot's dual Ackermann steering mechanism.

I completed my B.Tech in Mechanical Engineering with a Minor in Computer Engineering at <a href="https://www.coeptech.ac.in/" target="_blank">College of Engineering, Pune</a> <img src="images/coepfavicon.ico" alt="COEP" width="16" style="vertical-align:middle;">. 




<div class="side-by-side" style="justify-content: flex-start;">
<div class="media">
<a href="https://www.youtube.com/watch?v=1CN3ZjOrtVQ" target="_blank"><img src="https://img.youtube.com/vi/1CN3ZjOrtVQ/0.jpg" alt="robot_video_terramax"></a>
</div>
</div>


# Publications

### CATNAV: Cached Vision-Language Traversability for Efficient Zero-Shot Robot Navigation
Paper: [Link](https://arxiv.org/abs/2603.22800)

<div class="side-by-side" style="justify-content: flex-start;">
<div class="media">
<video controls><source src="images/catnav_1min.mp4" type="video/mp4"></video>
</div>
</div>

- Zero-shot, embodiment-aware traversability framework using multimodal LLMs for costmap generation and trajectory selection; a visuosemantic caching mechanism reuses prior risk assessments for similar frames, reducing online VLM queries by 85.7%.
- Evaluated on a quadruped robot across indoor and outdoor unstructured environments; achieves 10% higher goal-reaching rate and 33% fewer behavioral constraint violations versus state-of-the-art VLA baselines.

### Visual-Language-Guided Task Planning for Horticultural Robots
Paper: [Link](https://www.arxiv.org/abs/2601.11906)

- Developed a modular VLM-guided framework for precision agriculture that interleaves natural language queries with action primitives for autonomous crop monitoring.
- Evaluated across monoculture and polyculture environments; VLMs achieve human-comparable performance on short-horizon tasks but degrade significantly in long-horizon scenarios, with critical failure modes in context grounding under noisy semantic maps.

<div class="side-by-side" style="justify-content: flex-start;">
<div class="media">
<video controls><source src="images/horticultural_robot.mp4" type="video/mp4"></video>
</div>
</div>

more coming soon ...

# Projects

### Low-Rank Adaptation for Video Generation with semantic relative pose prompts (CS 598 3D Vision, HACKER Project)

Code: [Link](https://github.com/chih-hao-lin/3DV_2025Fall/tree/main/group_09_video_generation/apotnis2_lora_finetune)

<div class="side-by-side">
<div class="text" markdown="1">
- Fine-tuned Wan 2.2 (1.3B) with LoRA to generate robot-POV navigation videos from text + motion plans for scalable outdoor data synthesis.
- Collected a multimodal outdoor robot dataset (RGB, GPS+IMU EKF poses, motion captions) for training.
- Evaluated motion fidelity and failure modes, identifying memory artifacts and noise sensitivity; proposed hierarchical motion-primitive curriculum training to improve alignment.
</div>
<div class="media">
<video controls><source src="images/vid-gen-robot.mp4" type="video/mp4"></video>
</div>
</div>


### GhibliDream – Studio-Ghibli inspired Stylization of Stable Diffusion (CS 444)
Report: [Link](docs/CS444-ghiblidream.pdf)

<div class="side-by-side">
<div class="text" markdown="1">
- Fine-tuned StableDiffusion-2.0 for stylization with DreamBooth on curated images using a T4/A100 instance.
Built a LLM-assisted (Gemini-2.0/GPT4o based) image auto-captioning workflow to generate variation of text
length, tone and styles.
- Stress tested system via targeted ablation of samplers & prompt length. Reached 0.90+ CLIP-I cosine similarity
on foreground characters while retaining backgrounds quality.
</div>
<div class="media">
<img src="images/Screenshot 2025-07-26 044527.png" alt="generated sample images">
</div>
</div>

### Salto Simulator for development

<div class="side-by-side">
<div class="text" markdown="1">
- Simulates [Salto-1P](https://www.youtube.com/watch?v=5tMjHBk-2JQ) jumping motion as a point object (Jumping cube) to help accelerate autonomy development. Allows for parabolic trajectory jumping with continous as well as periodic jumps.
- Simulates odometry, pose estimation and the required control action for the actual robot.
- Repo to be released soon.
</div>
<div class="media">
<img src="images/20250312-1307-47.1662169.gif" alt="salto-animation-1">
</div>
</div>

### VLM assisted Octomap generation for navigation

<div class="side-by-side">
<div class="text" markdown="1">
- Implemented vision and stereo depth based point cloud generation to create a octomap for robot navigation in 3d space.
- Performed open vocabulary segmentation via clipseg and point cloud generation via open3d for risk / inflation boundary creation.
- Tested on the nvidia r2b_2023 dataset.
</div>
<div class="media">
<video controls><source src="images/octomap-proj-1.mp4" type="video/mp4"></video>
</div>
</div>

### Design and Analysis of Tendon actuated Robotic arm using Bowden cables and Mechanical Multiplexing (Thesis @ COEP)
- Led team in designing a modular 4 degree of freedom Bowden cable driven, tendon actuated joint for robot modular planar and non-planar robot arm as part of Final year project at COEP. System is compact, lightweight and waterproof with remotely positioned actuators. Designed in Fusion 360 and analysed failure modes using ANSYS structural FEA.
- Mechanical Multiplexer allows multijointed arm to be controlled by only 2 stepper motors, reducing overall cost and size of system. Modular joints can be swapped easily to quickly modify degree of freedom of arm.
- Prototyped design using FDM 3D printing with PLA, And CNC stepper and Arduino control.
- Developed Forward Kinematics (FK) and Inverse Kinematics (IK) control for arm with Numerical optimization method. 
- Project awarded Best Working project award (Mechanical) by 1982 batch, Alumni association.
- Patent pending. Provisional patent done (IN202321006687).

<div style="display: flex; align-items: flex-start; gap: 1.5em; margin-bottom: 1em;">
<div style="flex: 0 0 auto; max-width: 120px;"><img src="images/multiplexer-arm-2.gif" alt="multiplexer-arm-2" style="width: 100%; height: auto; border-radius: 4px;"></div>
<div style="flex: 0 0 auto; max-width: 320px;"><img src="images/multiplexer-arm-1.jpg" alt="multiplexer-arm-1" style="width: 100%; height: auto; border-radius: 4px;"></div>
</div>

### Semantic-aware segmentation and navigation using CLIPSeg (CS440)
Slides: [Link](docs/smartnav.pdf) Report: [Link](docs/CS440-Final-Project.pdf)

<div class="side-by-side">
<div class="text" markdown="1">
- Combined CLIPSeg with Depth-Anything V2 to detect objects and obstacles, generating obstacle-aware gridmaps with 94% accuracy for scene understanding; compared CLIP and DINOv2 scene embeddings to quantify performance across indoor and outdoor spaces.
- Designed a modified A* planner with goal-object validation, achieving 81% success rate and ±9% distance accuracy for line-of-sight pathfinding across varied scenes.
</div>
<div class="media">
<img src="images/smartnav-image.png" alt="smartnav image output">
</div>
</div>

### ROS1 ROS2 bridge for faster debugging and code refactoring
- Created a Docker image generation repo to accelerate image creation and facilitate easier refactoring. [Link](https://github.com/adipotnis/ros1_bridge_ws)


# Competitive Robotics

 <img src="images/channels4_profile.jpg" alt="fll logo" width="100" /> <img src="images/images.png" alt="wro logo" width="200" />

I am a [FIRST](https://www.firstinspires.org/) and [WRO](https://wro-association.org/) alumni and I have participated in Robotics competitions since 2013. I have represented India Internationally in Robotics competitions thrice and also mentored a team which won Runner up Best Project Research in FLL Europe Opens in Estonia in 2018. I continue to mentor teams at [Robominds](https://www.robominds.in/) for FLL, FTC and Vex Robotics.     

## Achievements 
- Team India Coach, 2018 FIRST Lego League European Championships at Tallinn, Estonia. Team stood 2nd place for Best Project Research and 4th in Overall Robot Game. 
- Team India Representative in [World Robot Olympiad Internationals 2017(Costa Rica)](https://wro-association.org/competition/previous-challenges/),
- Team India Representative 2016(India) in [WRO 2016 Internationals, New Delhi](https://wro-association.org/competition/previous-challenges/), Gold Medal in 2016 Nationals.
- Team India Representative, Top 10 in [First Lego League Open European Championships, Spain(2016)](https://www.firstlegoleague.org/past-challenges) (Fully sponsored by Tata Motors).


I enjoy running and cycling, currently preparing for a 5k in 25 minutes. 

---
##### Made using [minimal-mistakes](https://github.com/mmistakes/minimal-mistakes)
