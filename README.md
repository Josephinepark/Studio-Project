# Studio Project

My theme : Glitch

Website Link : https://josephinepark.github.io/Studio-Project/

-------------------------------------

## Notes of the interests of the theme
Glitch has the meaning of error. Looking at various digital works related to Glitches, I found many works with striking colours, and this topic could interest users a lot. Thinking about how to create my creative outcome, I chose the artwork and the reading first. While looking at artwork and readings, a reading called ‘Chapter 3: The End of the Internet’ caught my eye. I wanted to express this era of infinite information as a work and this digital age in which we live through digital art.
<br>
<br>
I received positive feedback from my professor on the outcomes of Workshop 3 and Workshop 5. Based on this, I decided to develop my creative outcome further.
<br>
<br>- Workshop 3  : involved creating collages using buttons.
https://josephinepark.github.io/workshop-task-3/ 
<br>- Workshop 5 : focused on designing a dropdown menu using my portrait data.
https://josephinepark.github.io/workshop-task-5/ 
<br>
<br>Building on these two experiments, I developed the following ideas.

## Creative outcome ideas
- Using collage techniques to express glitches could be an interesting approach.
- Overlapping and errors themselves can become a form of art.
- Dropdown menus could be utilized to create a new vibe.
- Integrating internet-sourced elements (memes, maps, words, information, etc.) would add depth to the piece.

<br>Thus, my creative outcome is structured as follows:
<br>

- Dropdown menu featuring memes, maps, and words.
- Glitch-like background effects.
- A webcam function positioned at the centre.
- Five or more images assigned to each dropdown selection.
- Applying cracked or blurry filters to each image.
<br>
My creative outcome does not involve actual glitches occurring; instead, it visually represents the essence of a glitch. I refined my approach based on selected artworks and readings. Specifically, Rosa Menkman’s A Vernacular of File Formats inspired me, as it intentionally introduces file corruption to create art. However, my approach differs: rather than inducing real glitches, I simulate the appearance of glitches through visual outcome.
<br>
<br>



## Progress
First, I had to decide on the background. To give users a strong visual effect, I searched for glitches and explored how these effects could be implemented in p5.js.
https://p5.glitch.me/#examples 
<br>

While exploring the p5.js documentation and searching for various effects, I found an interesting glitch effect implemented through code. (noise glitch) 
https://editor.p5js.org/nikiafenix/sketches/plkcniKMn 


I applied noise-like effects to the background and implemented an interactive element that makes it feel slightly laggy as if experiencing a glitch. This way, users can feel as though they are navigating within a glitchy, distorted environment, enhancing the immersive experience of the work. I experimented with modifying the numeric values in the code to understand how different elements would change. By adjusting the numbers, I observed various transformations, such as changes in line shapes, colour variations, and alterations in the thickness of the lag-like effect.
<br>
<img width="959" alt="1" src="https://github.com/user-attachments/assets/092be054-1bde-4885-89ba-76378847849d" />

<img width="959" alt="2" src="https://github.com/user-attachments/assets/a349b632-d61c-41ed-bec3-509fd067df72" />
<br>
After deciding to use this as a background, I adjusted the numeric values to what I found most suitable. These modifications influenced the background's colour, the line's thickness, the glitches' speed and overall appearance.
<br>
<br>
Next, I decided to place a webcam function at the centre. https://editor.p5js.org/jeffThompson/sketches/ael8Y4YMB  
The reason behind this decision was that I wanted to represent myself as a person surrounded by infinite information. I intended the users to feel this as well. In addition, I wanted to include more elements related to the glitch, so I experimented with various filters on the camera. However, applying a filter also affected the background, which took some time to resolve.
I managed to fix this issue by adjusting the order of the filter function in the code. Additionally, I tested multiple numeric values to position the camera at the centre accurately.
<br>
<br>
<img width="959" alt="3" src="https://github.com/user-attachments/assets/0633ecc7-c761-49ae-9057-fc7eaf0317b9" />
<img width="959" alt="5-1  changing the filter order" src="https://github.com/user-attachments/assets/f7bfd506-6c07-4b7e-b2a3-457f0c336dda" />
<img width="959" alt="6  THRESHOLD filter" src="https://github.com/user-attachments/assets/4f5b3316-e741-44a0-af73-be062eedc9fd" />
<br>
<br>
After that I made a dropdown menu that was covered in Workshop 5. https://p5js.org/reference/p5/createSelect/ <br>
<br> Then I checked how it works, and I decided to switch to `mouse clicked()` instead of drop down menu because if the background works for mouse movement and drop down menu is also mouse click and image creation is also mouse click, it will be too moldless work due to too many things.


<img width="959" alt="7  dropdown men" src="https://github.com/user-attachments/assets/d9cd06b2-9226-4077-b9cc-fd37518a0ecc" />
<img width="959" alt="8  " src="https://github.com/user-attachments/assets/28cc03a2-b0ba-4189-9eca-1e106c96d5b5" />
<img width="959" alt="9  drop down menu 에서 button 형식으로 바꿈 " src="https://github.com/user-attachments/assets/5caa522f-d73b-4e57-a9ad-94597a669988" />
<br>
Then I uploaded the images after changing them in the drop down menu.<br>
https://p5js.org/reference/p5/image/ <br>
<br>
I thought that the expression method of infinite information pouring into the user was more suitable for the me called glitch than the user choosing a specific topic with the dropdown menu. https://p5js.org/reference/p5/mouseClicked/  At first, when I just placed the images, I thought it was too simple, and it was judged that there was no impact, so I tried various filters.<br>
<br>
At first, it was intended to indicate the user's cognitive error by putting a filter on the camera, but when the filter was put on the camera, the filter was applied to the background as well. So I thought that the user reflected on the camera should express the appearance of being lost due to the overflowing information and entering the digital world as it is.<br>
<br>

During this progress, I have asked chatgpt how to solve this problem.
My Prompt : How can I only make the (Gray) filter apples the webcam not for the background.
Response : To apply the GRAY filter only to the webcam feed and not to the entire canvas, you should isolate the filtering effect by using push() and pop(). These functions help to contain the transformation (like filter(GRAY)) to only the webcam image.
<br>
<img width="226" alt="image" src="https://github.com/user-attachments/assets/846dec52-d8dc-4c9a-a0a4-5e4f7eeeeafb" />
<br>
My Prompt : Still not working. How can I isolate the filter form the background.
Responst : To make the webcam grayscale while keeping the background unaffected, you can use tint(255, 0). This method is much simpler than using filter(GRAY), which affects the entire canvas.<br>
<img width="224" alt="image" src="https://github.com/user-attachments/assets/63249b63-4c8f-4d97-b530-fc213a9d9872" /> <br>
<br>
In addition, I asked my friends and looked for a solution together. Furthermore, I wanted to place the camera in front of me so that users could continuously see themselves in the digital world.

<br>
<img width="959" alt="11  xy를 랜덤으로 하는 중 (chatgpt 과정)" src="https://github.com/user-attachments/assets/d529afeb-9265-4a43-ac1a-97c154245e7d" />
<br>
My prompt : what is the p5.js code to reduce size of image in proportion
Response : To reduce the size of an image while maintaining its aspect ratio, you can use the `image()` function with calculated width and height values.
<Br>
How to Scale Proportionally
Use a scaling factor: Calculate the new width and height while keeping the original aspect ratio.
Ensure the image fits: Adjust based on windowWidth and windowHeight.<Br>
<Br>
![image](https://github.com/user-attachments/assets/19abd579-5985-4e5b-ad12-3fe5ead7022e)
<br>
Looking through this example code, I learned how to resize the images and I applied to my codes. (x and y)
<br>
<img width="959" alt="12  data 사용해서 code 바꿈 (chatgpt)" src="https://github.com/user-attachments/assets/84a3a871-d406-4528-8108-4ca0da8a7674" /><br>
<br>
I tried various things while changing the codes and thinking about where and what filters could be applied to produce more impactful results. As a result, there were some errors that occurred in the middle. I also experienced a phenomenon that lags due to the adjustment of the frame rate.<br>
<br>
<img width="959" alt="13" src="https://github.com/user-attachments/assets/f5c924b1-dcaa-4e1e-b6fc-cf9db3ce3329" /><br>
<Br>
For the filter for the image, I used `filter(INVERT)` which makes the user more chaos. 
 https://p5js.org/reference/p5/filter/
<br>
Finally, I was able to put the camera at the front and let the images appear every time I clicked. Later, I received feedback from classmates.
<br>
<img width="202" alt="image" src="https://github.com/user-attachments/assets/e2b1871d-390a-4174-8a02-3fad075554c0" />
<img width="511" alt="image" src="https://github.com/user-attachments/assets/6b14724f-93e6-463d-8733-54aae3f176a1" />
<img width="410" alt="image" src="https://github.com/user-attachments/assets/ab38fd5e-f48a-4c81-95fa-ece2b42d8a20" />
<img width="188" alt="image" src="https://github.com/user-attachments/assets/5609037d-8554-450b-988a-c4388791592b" />
<br>
After receiving this feedback, I modified my creative outcome. I thought it would be nice if the camera was at the front, but after receiving the feedback, I also thought that placing the camera in the back could better convey the meaning I was trying to convey. So, I have placed the camera at the back again. However, I wanted to express the user's appearance more specifically, so I changed the camera so that it could appear several times. Moreover, I have tried to change the backgournd colour and I have added a filter of Dilate. This made the webpage to be able to give a feeling of exhaustion of the infinite informations in digital world.  <Br>
<Br>
I applied Invert using `for loop` and then applied `filter(INVERT)` again to show a glistening phenomenon (which looks like glitch). Among these, some pictures sometimes stop working due to errors, but I decided to leave them as they are because they seem to fit the theme of glitch.<Br>
<Br>
<img width="953" alt="image" src="https://github.com/user-attachments/assets/22cac4b4-80f4-4774-9e13-35b3bc8dc53d" />
<Br>
In the next progress, I got some help from a friend as I thought it would be nice if the camera would be re-generated with some regularity. My friend used `if` to show me that it would allow the camera to come out when the rest, like 10, 20, 30 and so on, went to zero. Which means that it is going to draw the webcam on the top when count is a multiple of 10. <br>
<Br>
The camera appears once with five clicks because the images are created to appear in two. This was able to visually express the user facing digital information, becoming confused in the information, and becoming more and more into it.<Br>
<Br>

## Future Development
<br>
Over the past six weeks, I have learned so much about coding in such a short time. Since I started with little to no knowledge, this project was a significant challenge for me. I spent countless hours watching reference videos, seeking help from my instructor and peers, and gradually strengthening my coding skills. While my final outcome may not feature complex functions or advanced techniques, this experience has taught me how to approach learning code effectively.<Br>
<Br>
I used to see coding as something incredibly difficult, a hurdle too high to overcome. However, this project has changed that mindset, and I am grateful for the opportunity to challenge my own limitations.<Br>
<Br>
For this project, I explored the theme of Glitch through Rosa Menkman’s A Vernacular of File Formats and Lynne McNeill’s The End of the Internet: A Folk Response to the Provision of Infinite Choice. Despite balancing multiple responsibilities during this period, I was able to complete my creative outcome within the given timeframe. However, if I were to further develop this project, I would focus on enhancing the impact of the webcam. For example, I could introduce glitches when the camera detects a certain number of images or make the camera position randomized to amplify the sense of chaos within the flood of information.<Br>
<Br>
Additionally, I would expand the background beyond just images, incorporating more elements that represent the digital world and its overwhelming nature. While this project marks the completion of my creative outcome for now, I believe that, much like the infinite stream of digital information, my growth as a creator is limitless.
<br>

## Reference / other sources that helped me

- Videos related to Glitch what I have got ideas from<Br>
<Br>
https://www.youtube.com/watch?v=-vU8iVKa4Zc <Br>
https://www.youtube.com/watch?v=ILvxsJcuJf4 <Br>
https://www.youtube.com/watch?v=r5YkU5Xu4_E <Br>
https://www.youtube.com/watch?v=moGHXSn5c9E <Br>
<br>

- Videos related to webcam what I have got ideas from <Br>
<Br>
https://www.youtube.com/watch?v=Fp7nkcKi5Dw&t=1037s <Br>
<Br>

- Videos related to images in p5.js <Br>
<br>
https://www.youtube.com/watch?v=i2C1hrJMwz0 <Br>
https://www.youtube.com/watch?v=FVYGyaxG4To <Br>
<Br>

- Image link : <Br>
<Br>
https://www.bu.edu/articles/2024/10-memes-to-describe-the-first-week-of-school/<Br>
<Br>
https://www.westminster.ac.uk/about-us/our-university/outreach-for-schools-and-colleges/extended-project-qualification-epq-support/knowing-meme-knowing-you-how-memes-influence-our-society <Br>
<Br>
https://editor.p5js.org/nikiafenix/sketches/plkcniKMn <Br>
<Br>
https://developers.google.com/maps/documentation/maps-static  <Br>
<Br>
https://pixabay.com/photos/europe-countries-map-continent-3483539/  <Br>
<Br>
https://developers.google.com/codelabs/maps-platform/maps-platform-101-react-js#0 <Br>
<Br>
https://wordart.com/ <Br>
<Br>
https://www.uxforthemasses.com/word-clouds/ <Br>


