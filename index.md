---
layout: single
title: ""
author_profile: true
---

## About Me

I work on enabling robots to navigate and act in unstructured environments using foundation models.

Currently, I'm a student at UIUC <img src="images/uiucfavicon.ico" alt="UIUC" width="16" style="vertical-align:middle;"> pursuing a MS in Computer Science with a focus on Robotics. I'm advised by <a href="http://daslab.illinois.edu/index.html#girish" target="_blank">Girish Chowdhary</a> at <a href="http://daslab.illinois.edu/index.html" target="_blank"> Distributed Autonomous Systems Lab</a>. My research is focused on Outdoor Navigation with Vision Language Action models and embodiment aware grounding for Vision Large Language Models.

Previously, I worked at <a href="https://www.earthsense.co/" target="_blank">Earthsense</a>, on hardware design, autonomy, and optimization for a 750kg payload AGV. My contributions included developing the lower-level control systems and implementing 4-wheel independent torque vectoring for the TerraMax Robot's dual Ackermann steering.

I completed my B.Tech in Mechanical Engineering with a Minor in Computer Engineering at <a href="https://www.coeptech.ac.in/" target="_blank">College of Engineering, Pune</a> <img src="images/coepfavicon.ico" alt="COEP" width="16" style="vertical-align:middle;">. 

I enjoy running and cycling, currently preparing for a 5k in 25 minutes.

My research is partially supported by the NASA FireSense Technology Program, Artificial Intelligence for Future Agricultural Resilience, Management, and Sustainability (AIFARMS), Illinois Farming and Regenerative Management (I-FARM), and COntext-Aware LEarning for Sustainable CybEr-agricultural systems (COALESCE).


<div class="side-by-side" style="justify-content: flex-start;">
<div class="media">
<a href="https://www.youtube.com/watch?v=1CN3ZjOrtVQ" target="_blank"><img src="https://img.youtube.com/vi/1CN3ZjOrtVQ/0.jpg" alt="robot_video_terramax"></a>
</div>
</div>


# Publications

### CATNAV: Cached Vision-Language Traversability for Efficient Zero-Shot Robot Navigation
Paper: [Link](https://arxiv.org/abs/2603.22800)

<div class="side-by-side">
<div class="media">
<video controls><source src="images/catnav_1min.mp4" type="video/mp4"></video>
</div>
<div class="text" markdown="1">
Zero-shot embodiment-aware traversability framework using multimodal LLMs for costmap generation; visuosemantic caching reduces online VLM queries by 85.7%, achieving 10% higher goal-reaching rate and 33% fewer behavioral constraint violations versus state-of-the-art VLA baselines on a quadruped robot.
</div>
</div>

### Visual-Language-Guided Task Planning for Horticultural Robots
Paper: [Link](https://www.arxiv.org/abs/2601.11906)

<div class="side-by-side">
<div class="media">
<video controls><source src="images/horticultural_robot.mp4" type="video/mp4"></video>
</div>
<div class="text" markdown="1">
Modular VLM-guided framework for precision agriculture interleaving natural language queries with action primitives for autonomous crop monitoring, benchmarked long-horizon planning using MLLMs, finding human-comparable performance on short-horizon tasks but degradation in long-horizon scenarios with noisy semantic maps.
</div>
</div>

more coming soon ...

# Projects

### Visual Navigation Policy with V-JEPA2 and Diffusion Policy
Code: [Link](https://github.com/adipotnis/DiffusionNav)

<div class="side-by-side">
<div class="media">
<video controls><source src="images/vjepa_vid_gen/clip_jackal_2019-12-19-10-58-43_3_r01.mp4" type="video/mp4"></video>
<video controls><source src="images/vjepa_vid_gen/clip_random_mdps_B_Jackal_GDC_Library_Sat_Nov_13_87_0.mp4" type="video/mp4"></video>
</div>
<div class="text" markdown="1">
Trained a visual navigation policy using a frozen V-JEPA2 backbone for spatiotemporal feature extraction from egocentric video, with a Diffusion Policy action head for action prediction.
</div>
</div>

### Low-Rank Adaptation for Video Generation with semantic relative pose prompts (CS 598 3D Vision, HACKER Project)

Code: [Link](https://github.com/chih-hao-lin/3DV_2025Fall/tree/main/group_09_video_generation/apotnis2_lora_finetune)

<div class="side-by-side">
<div class="media">
<video controls><source src="images/vid-gen-robot.mp4" type="video/mp4"></video>
</div>
<div class="text" markdown="1">
Fine-tuned Wan 2.2 (1.3B) with LoRA to generate robot-POV navigation videos from text and motion plans for scalable outdoor data synthesis. Evaluated motion fidelity and failure modes, proposing hierarchical motion-primitive curriculum training to improve alignment.
</div>
</div>


### GhibliDream – Studio-Ghibli inspired Stylization of Stable Diffusion (CS 444)
Report: [Link](docs/CS444-ghiblidream.pdf)

<div class="side-by-side">
<div class="media">
<img src="images/Screenshot 2025-07-26 044527.png" alt="generated sample images">
</div>
<div class="text" markdown="1">
Fine-tuned StableDiffusion-2.0 with DreamBooth on curated Ghibli images using LLM-assisted auto-captioning, achieving 0.90+ CLIP-I cosine similarity on foreground characters while retaining background quality.
</div>
</div>

### Salto Simulator for development
Code: [Link](https://github.com/adipotnis/gazebo_plugin_salto)

<div class="side-by-side">
<div class="media">
<img src="images/20250312-1307-47.1662169.gif" alt="salto-animation-1">
</div>
<div class="text" markdown="1">
Gazebo plugin simulating [Salto-1P](https://www.youtube.com/watch?v=5tMjHBk-2JQ) jumping motion as a point object, supporting parabolic trajectory jumping and simulated odometry/pose estimation to accelerate autonomy development.
</div>
</div>

### Design and Analysis of Tendon actuated Robotic arm using Bowden cables and Mechanical Multiplexing (Thesis @ COEP)
Report: [Link](docs/robotic_arm_mux_report.pdf)

<div class="side-by-side">
<div class="media media--tall">
<img src="images/multiplexer-arm-2.gif" alt="multiplexer-arm-2">
<img src="images/multiplexer-arm-1.jpg" alt="multiplexer-arm-1">
</div>
<div class="text" markdown="1">
Designed a modular 4-DOF Bowden cable-driven tendon-actuated robot arm with a mechanical multiplexer enabling full control with only 2 stepper motors, prototyped with FDM printing and including FK/IK solvers. Awarded Best Working Project (Mechanical) at COEP; provisional patent filed (IN202321006687).
</div>
</div>

### ROS1 ROS2 bridge for faster debugging and code refactoring
- Created a Docker image generation repo to accelerate image creation and facilitate easier refactoring. [Link](https://github.com/adipotnis/ros1_bridge_ws)

### VLM assisted Octomap generation for navigation

<div class="side-by-side">
<div class="media media--tall">
<video controls><source src="images/octomap-proj-1.mp4" type="video/mp4"></video>
</div>
<div class="text" markdown="1">
Implemented open-vocabulary segmentation with CLIPSeg and stereo depth-based point cloud generation via Open3D to build octomaps for 3D robot navigation, tested on the NVIDIA r2b_2023 dataset.
</div>
</div>

### Semantic-aware segmentation and navigation using CLIPSeg (CS440)
Slides: [Link](docs/smartnav.pdf) Report: [Link](docs/CS440-Final-Project.pdf)

<div class="side-by-side">
<div class="media">
<img src="images/smartnav-image.png" alt="smartnav image output">
</div>
<div class="text" markdown="1">
Combined CLIPSeg with Depth-Anything V2 for obstacle-aware gridmap generation (94% accuracy); modified A* planner with goal-object validation achieves 81% success rate for line-of-sight pathfinding.
</div>
</div>


# Competitive Robotics

 <img src="images/channels4_profile.jpg" alt="fll logo" width="100" /> <img src="images/images.png" alt="wro logo" width="200" />

I am a [FIRST](https://www.firstinspires.org/) and [WRO](https://wro-association.org/) alumni and I have participated in Robotics competitions since 2013. I have represented India Internationally in Robotics competitions thrice and also mentored a team which won Runner up Best Project Research in FLL Europe Opens in Estonia in 2018. I continue to mentor teams at [Robominds](https://www.robominds.in/) for FLL, FTC and Vex Robotics.     

## Achievements 
- Team India Coach, 2018 FIRST Lego League European Championships at Tallinn, Estonia. Team stood 2nd place for Best Project Research and 4th in Overall Robot Game. 
- Team India Representative in [World Robot Olympiad Internationals 2017(Costa Rica)](https://wro-association.org/competition/previous-challenges/),
- Team India Representative 2016(India) in [WRO 2016 Internationals, New Delhi](https://wro-association.org/competition/previous-challenges/), Gold Medal in 2016 Nationals.
- Team India Representative, Top 10 in [First Lego League Open European Championships, Spain(2016)](https://www.firstlegoleague.org/past-challenges) (Fully sponsored by Tata Motors).


---
##### Made using [minimal-mistakes](https://github.com/mmistakes/minimal-mistakes)
