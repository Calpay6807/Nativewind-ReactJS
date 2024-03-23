import {Button} from '@components/ui/core/button';
import {signOut} from '@store/auth';
import {View} from '@components/ui/core/view';
import {StyledScrollView} from '@components/ui/core/scrollview';

const Profile = () => {
  return (
    <StyledScrollView
      style={{backgroundColor: 'black'}}
      showsVerticalScrollIndicator={false}>
      <View style={{flex: 1}}>
        <Button
          label={'Logout'}
          variant="secondary"
          onPress={() => signOut()}
        />
      </View>
    </StyledScrollView>
  );
};

export default Profile;
