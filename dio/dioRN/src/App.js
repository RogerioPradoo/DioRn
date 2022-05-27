import React from 'react';
import {
    View, 
    Image, 
    StyleSheet, 
    SafeAreaView, 
    StatusBar, 
    Text,
    Pressable,
    Linking,
} from 'react-native';


const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colordarkGithub = '#4F566E';

const imageProfileGitHub = 
  'https://avatars.githubusercontent.com/u/90151800?v=4';


  const urlToMyGitHub = 'https://github.com/RogerioPradoo';


const App = () => {

    const handlePressGoToGithub = async () => {
        console.log('Verificando link');
        const res = await Linking.canOpenURL(urlToMyGitHub);
        if (res) {
             console.log('link aprovado');
             console.log('abrindo link...');
             await Linking.openURL(urlToMyGitHub);
        }
    };
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle='light-content' />
            <View style={style.content}>
               <Image accessibilityLabel='Rogerio Perfil'
                style={style.avatar} 
                source={{uri: imageProfileGitHub}}/>
        </View>
        <Text accessibilityLabel=' name ' style={[style.defaultText, style.name]}>Rogerio Silva</Text>
        <Text accessibilityLabel=' Nickname ' style={[style.defaultText, style.nickname]}>Desenvolvedor</Text>
        <Pressable onPress={handlePressGoToGithub}>
            <View style={style.button}>
                <Text style={[style.defaultText, style.textButton]}>
                    Open in Github
                    </Text>
            </View>
        </Pressable>
    </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        // column
        backgroundColor: colorGithub,
        flex: 1, // expandi para a tela inteira
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    /*text: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white',*/
        avatar : {
            height: 200,
            width: 200,
            borderRadius: 100,
            borderColor: '#55F284',
            borderWidth: 2,
        },
        defaultText: {
            color: colorFontGithub,
        },
        name: {
            fontSize: 25,
            fontWeight: 'bold',
        },
        nickname: {
            color: colordarkGithub,
            fontSize: 18,
        },
        button: {
            marginTop: 20,
            backgroundColor: colordarkGithub,
            borderRadius: 10,
            padding: 20,
        },
        textButton: {
            fontSize: 18,
            fontWeight: 'bold',
        },  
});