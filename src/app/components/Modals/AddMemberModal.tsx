'use client'
import { useCallback, useEffect, useState } from 'react';
import { useAddMemberModal } from '@/app/contexts/addMemberModalContext';

import Modal from '../Modal';
import ImageUpload from '../ImageUpload';
import Input from '../Input';
import { RolesList } from '@/app/constants/constants';
import { useMembers } from '@/app/contexts/MembersContext';

const AddMemberModal = () => {
    const {isOpen, onClose} = useAddMemberModal();
    const { setMembers } = useMembers();

    const [profileImage, setProfileImage] = useState('');
    const [role, setRole] = useState('');
    const [username, setUsername] = useState('');
    const [joiningDate, setJoiningDate] = useState('');

    useEffect(() => {
        if (isOpen) {
            setProfileImage('');
            setRole('');
            setUsername('');
            setJoiningDate('');
        }
    }, [isOpen]);

    const [isLoading, setIsLoading ] = useState(false);

    const onSubmit = useCallback(async () => {
        try{
            setIsLoading(true);

            const newMember = {
              avatar: profileImage,
              username,
              joinDate: joiningDate,
              role,
              isOnline: false,
            }

            console.log("New Member: ", newMember);

            setMembers((prev) => [...prev, newMember]);

            onClose();
            setIsLoading(false);
        }catch(error){
            console.log(error);
        }
    }, [
        profileImage,
        joiningDate,
        role,
        setMembers,
        username,
        setIsLoading,
        onClose,
    ])

    const bodyContent = (
  <div className="flex flex-col gap-4">
    {/* Image Upload */}
    <ImageUpload
      value={profileImage}
      disabled={isLoading}
      onChange={(image) => setProfileImage(image)}
      label="Upload a profile image"
    />

    {/* Username Input */}
    <Input
      placeholder="Username"
      onChange={(e) => setUsername(e.target.value)}
      value={username}
      disabled={isLoading}
    />

    {/* Role Dropdown */}
    <select
      className="w-full p-3 text-sm text-white bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary [&>option]:bg-neutral-700"
      onChange={(e) => setRole(e.target.value)}
      value={role}
      disabled={isLoading}
    >
      <option value="" className="text-white">
        Select Role
      </option>
      {RolesList.length > 0 &&
        RolesList.map((role) => (
          <option key={role.name} value={role.name}>
            {role.name.charAt(0).toUpperCase() + role.name.slice(1)}
          </option>
        ))}
    </select>

    {/* Joining Date Input */}
    <input
      type="date"
      name="filterJoiningDate"
      className="w-full p-3 text-sm text-white bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
      onChange={(e) => setJoiningDate(e.target.value)}
      disabled={isLoading}
    />
  </div>
);

  return (
    <Modal
        disabled={isLoading}
        isOpen={isOpen}
        title="Add Member"
        actionLabel="Save"
        onClose={onClose}
        onSubmit={onSubmit}
        body={bodyContent}
    />
  )
}

export default AddMemberModal