import React, { useState } from 'react';
import {SafeAreaView, ScrollView,View,Text,Image,TouchableOpacity, StyleSheet} from 'react-native';




const App = () => {
  const [currentSection, setCurrentSection] = useState('name');

const resumeData = {
  imageUrl: require ('./assets/Profile.jpg'),
  name: 'Clifford John T. Monteras',
  course: 'Bachelor of Science in Information Technology',
  education: {
    elementary: 'MINES ELEMENTARY SCHOOL',
    elementaryYear: '2014 - 2015',
    highschool: 'ERNESTO RONDON HIGH SCHOOL',
    highschoolYear: '2015 - 2019',
    seniorhighSchool: 'ABE INTERNATIONAL BUSINESS',
    seniorhighYear: '2019 - 2021',
    college: 'GLOBAL RECIPROCAL COLLEGES',
    collegeYear: '2021 - Present',



    },
    about: 'My name is Clifford John T. Monteras, 21 years old a 1st year college student in Global Reciprocal Colleges ( GRC ). I’m a first child of Mary Ann T. Monteras and Alexander M. Monteras. I have a one siblings. I live at 58 Naga St. Pael Culiat Quezon City.',
    skills:
    {
      skillsName: 'Photography',
      imageSrc: require('./assets/Photography.jpg'),
      description: 'My hobbies is photography starting in pandemic and I already have big projects are debut, birthday and sexy shoot',
    },
    skill1:
    {
      skillsName: 'Basketball',
      imageSrc: require('./assets/imgskill.jpg'),
      description: 'Basketball is my favorite sports. It started when I was young. It became my passion because of watching pba',
    },
    contact: 
    {
      mobile: '0905-760-6261',
      email: 'cliffordtome6@gmail.com',
    },
  }

  
   const handlePress = () => {
    setCurrentSection((prevSection) => {
      switch (prevSection) {
        case 'name':
          return 'education';
        case 'education':
          return 'about'
        case 'about':
          return 'skills'
        case 'skills':
          return 'skills1'
        case 'skills1':
          return 'contact'
        case 'contact':
          return 'name'
        default:
          return 'name'
      }
    });
  }

  return (
      <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={handlePress} style={styles.contentContainer}>
        {currentSection === 'name' && (
          <>
            <View style={{alignItems:'center'}}>
            <Image source={resumeData.imageUrl} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.header}>{resumeData.name}</Text>
              <Text style={styles.info}>{resumeData.course}</Text>
            </View>
          </>
          )}
          {currentSection === 'education' && (
            <View>
              <Text style={styles.textHeader}>Education: </Text>
              <Text style={styles.textHeaderSmall}>College:</Text>
              <Text style={[styles.textBody, {marginBottom:0}]}>{resumeData.education.college}</Text>
              <Text style={styles.textBodySubtle}>{resumeData.education.collegeYear}</Text>
              <Text style={styles.textHeaderSmall}>Senior High School:</Text>
              <Text style={[styles.textBody, {marginBottom:0}]}>{resumeData.education.seniorhighSchool}</Text>
              <Text style={styles.textBodySubtle}>{resumeData.education.seniorhighYear}</Text>
              <Text style={styles.textHeaderSmall}>High School:</Text>
              <Text style={[styles.textBody, {marginBottom:0}]}>{resumeData.education.highschool}</Text>
              <Text style={styles.textBodySubtle}>{resumeData.education.highschoolYear}</Text>
              <Text style={styles.textHeaderSmall}>Elementary:</Text>
              <Text style={[styles.textBody, {marginBottom:0}]}>{resumeData.education.elementary}</Text>
              <Text style={styles.textBodySubtle}>{resumeData.education.elementaryYear}</Text>
            </View>
          )}
          {currentSection === 'about' && (
            <View>
              <Text style={styles.textHeader}>About Me: </Text>
              <Text style={styles.textabout}>{resumeData.about}</Text>
            </View>
          )}
          {currentSection === 'skills' && (
            <View>
              <Text style={styles.textHeader}>Skills #1:</Text>
              <Text style={styles.textHeaderSmall}>{resumeData.skills.skillsName}</Text>
              <View style={{alignItems:'center'}}>
                <Image style={styles.image} source={resumeData.skills.imageSrc}/>
              </View>
               <Text style={styles.textSkills}>{resumeData.skills.description}</Text>
            </View>
          )}
           {currentSection === 'skills1' && (
            <View>
              <Text style={styles.textHeader}>Skills #2:</Text>
              <Text style={styles.textHeaderSmall}>{resumeData.skill1.skillsName}</Text>
              <View style={{alignItems:'center'}}>
                <Image style={styles.image} source={resumeData.skill1.imageSrc}/>
              </View>
               <Text style={styles.textSkills}>{resumeData.skill1.description}</Text>
            </View>
          )}
          {currentSection === 'contact' && (
            <View>
               <Text style={styles.textHeader}>Contact Me:</Text>
               <Text style={styles.textBodySubtle}>Email:</Text>
               <Text style={styles.textBody}>{resumeData.contact.email}</Text>
               <Text style={styles.textBodySubtle}>Contact Number:</Text>
               <Text style={styles.textBody}>{resumeData.contact.mobile}</Text>
            </View>
          )}
          
          
          </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create ({
  container: {
    flex:1,
    padding: 20,
    justifyContent: 'center',
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 200 / 2,
    marginBottom: 20,
  },
  header: {
    fontSize: 25,
    textAlign: 'center',
  },
  info: {
    fontSize: 15,
    textAlign:'center',

  },
  textHeader: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12
  },
  textHeaderSmall: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12
  },
  textBody: {
    fontSize: 18,
    marginBottom: 12,
    
  },
  textBodySubtle: {
    fontSize: 18,
    marginBottom: 12,
    color: 'gray'
  },
  textabout: {
    fontSize: 18,
    marginBottom: 12
  },
   textSkills: {
    fontSize: 18,
    marginBottom: 12,
    textAlign: 'center',
  },
  
 

  

})


        
      
      
export default App