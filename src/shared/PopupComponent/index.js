import React, {useState} from 'react';
import {
  Image,
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from '../Icon';
import style from './styles';
import {setPopup, setProjectApi, setUser} from '../../store/actions';
import {useDispatch, useSelector} from 'react-redux';
import {createdProjectsApi} from '../../services/api';
const Popup = () => {
  const [project, setProject] = useState('');
  const [emails, setEmails] = useState('');
  const [showviews, setShowViews] = useState(false);
  const [clickchange, setClickChange] = useState('VIEW');
  const [projectnameerror, setProjectNameError] = useState(false);
  const [emailvaliderror, setEmailValidError] = useState(false);
  const [emailduplicateerror, setEmailDuplicateError] = useState(false);
  const popup = useSelector(state => state.popup);
  const users = useSelector(state => state.users);
  const owner = useSelector(state => state.owner);
  const dispatch = useDispatch();

  const createEmails = () => {
    if (emails !== '') {
      setEmailValidError(false);
      const result = emails
        .split(',')
        .some(obj1 => users.some(obj2 => obj1 === obj2.email));
      if (!result) {
        const validEmail = emails
          .split(',')
          .every(element =>
            /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(element),
          );
        console.log(validEmail, 'validEmail');
        emails.split(',').forEach(element => {
          if (validEmail) {
            const object = {
              image: '',
              name: 'Srinu',
              email: element,
              permission: clickchange,
            };

            dispatch(setUser(object));
            setEmails('');
          } else {
            setEmailValidError(true);
          }
        });
      } else {
        setEmailDuplicateError(true);
      }
    }
  };

  const emailvalid = e => {
    setEmailValidError(false);
    setEmailDuplicateError(false);
    setEmails(e);
  };

  const projectvalidation = e => {
    setProject(e);
    setProjectNameError(false);
  };

  const addbutton = () => {
    if (project === '') {
      setProjectNameError(true);
    } else {
      if (emails !== '') {
        const result = emails
          .split(',')
          .some(obj1 => users.some(obj2 => obj1 === obj2.email));
        if (!result) {
          const validEmail = emails
            .split(',')
            .every(element =>
              /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(element),
            );
          emails.split(',').forEach(element => {
            if (validEmail) {
              const object = {
                image: '',
                name: 'Srinu',
                email: element,
                permission: clickchange,
              };
              dispatch(setUser(object));
              setEmails('');
              setProject('');
            } else {
              setEmailValidError(true);
            }
          });
        } else {
          setEmailDuplicateError(true);
        }
      }
      if (!emailduplicateerror && !projectnameerror && !emailvaliderror) {
        const usersList = JSON.parse(JSON.stringify(users));
        const projectObject = {
          project: project,
          owner: owner,
          users: usersList,
        };
        console.log(projectObject);

        const requestBody = [
          {
            type: 'PROJECT',
            id: `ef8df1d-f14-5550-${Math.round(Math.random() * 1000000)}`,
            name: project,
            invitedList: usersList,
            createdAt: new Date(),
            updatedAt: new Date(),
            createdBy: owner,
            isDeleted: 0,
            isFavourite: 0,
            folders: [],
            files: [],
          },
        ];
        dispatch(setProjectApi(projectObject));
        setProject('');
        setEmails('');
        dispatch(setPopup(!popup));
        createdProjectsApi(requestBody);
        // projectsApi();
      }
    }
  };

  const changeViewPermission = () => {
    setClickChange('VIEW');
    setShowViews(!showviews);
  };

  const changeEditPermission = () => {
    setClickChange('EDIT');
    setShowViews(!showviews);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={style.newuserpopup}>
        <View style={style.popupscreentitle}>
          <View style={style.title}>
            <Text style={style.titletext}>Create Project</Text>
          </View>
          <View style={style.crossicon}>
            <Icon
              style={{alignSelf: 'flex-end'}}
              onPress={() => dispatch(setPopup(!popup))}
              name="cross"
              size={18}
            />
          </View>
        </View>
        <View style={style.name}>
          <Text style={style.label}>Name</Text>
          <View style={style.inputView}>
            <TextInput
              value={project}
              onChangeText={e => projectvalidation(e)}
              style={{width: '100%'}}
              placeholder="Project Name"
            />
          </View>
          {projectnameerror && (
            <Text style={{color: 'red', fontSize: 15, alignSelf: 'flex-start'}}>
              Please enter project name
            </Text>
          )}
        </View>
        <View style={style.emailinvite}>
          <View
            style={{
              alignSelf: 'center',
              borderWidth: 1,
              borderColor: 'grey',
              flexDirection: 'row',
              width: '75%',
              borderRadius: 5,
              height: 40,
              marginRight: 5,
            }}>
            <View
              style={{
                width: '70%',
              }}>
              <TextInput
                value={emails}
                onChangeText={e => emailvalid(e)}
                placeholder="Email, Comma separated"
              />
            </View>
            <View style={style.showviews}>
              <TouchableOpacity
                onPress={() => {
                  setShowViews(!showviews);
                }}
                style={style.showviewsbutton}>
                <Text style={{color: 'black'}}>{clickchange}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={style.invitecontainer}>
            <TouchableOpacity onPress={createEmails} style={style.invitebutton}>
              <Text style={{color: 'white', fontSize: 17}}>Invite</Text>
            </TouchableOpacity>
          </View>
          {showviews && (
            <View style={style.showviewspopup}>
              <TouchableOpacity
                onPress={() => changeViewPermission()}
                style={style.viewonly}>
                <Text style={{color: 'black', fontSize: 16, paddingTop: 3}}>
                  View only
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => changeEditPermission()}
                style={style.canedit}>
                <Text style={{color: 'black', fontSize: 16, paddingTop: 3}}>
                  can edit
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        {(emailvaliderror || emailduplicateerror) && (
          <Text style={{fontSize: 15, color: 'red', paddingHorizontal: 15}}>
            {emailduplicateerror
              ? 'Email already available'
              : 'Enter valid email'}
          </Text>
        )}

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{marginTop: 10, paddingHorizontal: 15}}>
          {users.map((element, index) => {
            return (
              <View key={index} style={style.userinfo}>
                {element.image !== '' ? (
                  <View
                    style={{
                      width: '15%',
                      alignItems: 'flex-start',
                    }}>
                    <Image
                      source={{
                        uri: element.image,
                      }}
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 25,
                      }}
                    />
                  </View>
                ) : (
                  <View
                    style={{
                      width: '15%',
                      alignItems: 'flex-start',
                    }}>
                    <View
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 25,
                        backgroundColor: 'red',
                        fontSize: 22,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: 22,
                          color: 'black',
                        }}>
                        {element.email[0].toUpperCase()}
                      </Text>
                    </View>
                  </View>
                )}
                <View
                  style={{
                    width: '50%',
                    justifyContent: 'center',
                    height: 40,
                  }}>
                  <Text
                    numberOfLines={1}
                    style={{color: 'black', fontSize: 17}}>
                    {element.email}
                  </Text>
                </View>
                <View
                  style={{
                    width: '20%',
                    marginLeft: 50,
                    height: 40,
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: 'black', alignSelf: 'flex-end'}}>
                    {element.permission}
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
        <View style={style.canceladd}>
          <View style={style.cancelbutton}>
            <TouchableOpacity onPress={() => dispatch(setPopup(!popup))}>
              <Text style={{color: 'black', fontSize: 18}}>Cancel</Text>
            </TouchableOpacity>
          </View>
          <View style={style.addbutton}>
            <TouchableOpacity onPress={() => addbutton()}>
              <Text style={{color: 'white', fontSize: 18}}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Popup;
