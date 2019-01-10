
import * as React from 'react';
import {MemberEntity} from '../../model';

import { Input, Button } from '../form'

interface State{
    members: MemberEntity[]
}
interface Props{
  member: MemberEntity;
  onSave: () => void;
  onChange: (fieldName: string, value: string) => void;
}

export const MemberForm: React.StatelessComponent<Props> = (props) => {
  return (
    <form>
      <h1>Mange member</h1>
      <Input name="login" label="Login" value={props.member.login} onChange={props.onChange}/>
      <Input name="avatar_url"
        label="Avatar Url"
        value={props.member.avatar_url}
        onChange={props.onChange}
      />
      <Button label="Save" className="btn btn-defaul" onClick={props.onSave}/>
    </form>
  );
}
