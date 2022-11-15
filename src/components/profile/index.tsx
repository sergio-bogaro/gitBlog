import { useEffect, useState } from "react";
import { ProfileContainer } from "./styles";
import { ArrowSquareOut, GithubLogo, Buildings, Users } from "phosphor-react";

interface user {
  name: string;
  gitUser: string;
  bio: string;
  icon: string;
  company: string;
  followers: number;
  profileLink: string;
}

export function Profile() {
  const [user, setUser] = useState<user>();

  function openGit() {
    window.open(user?.profileLink);
  }

  async function loadUser() {
    fetch("https://api.github.com/users/sergio-bogaro")
      .then((response) => response.json()) //Converting the response to a JSON object
      .then((data) => {
        const profileData: user = {
          name: data.name,
          gitUser: data.login,
          bio: data.bio,
          icon: data.avatar_url,
          followers: data.followers,
          company: data.company,
          profileLink: data.html_url,
        };
        setUser(profileData);
      });
  }

  useEffect(() => {
    loadUser();
  }, []);

  if (user != undefined) {
    return (
      <ProfileContainer>
        <img src={user.icon} alt="Icone do Usuário" />

        <div className="profileDataContainer">
          <div className="nameContainer">
            <p>{user.name}</p>
            <button onClick={openGit}>
              GITHUB
              <ArrowSquareOut size={18} />
            </button>
          </div>
          <p>{user.bio}</p>
          <p>{user.gitUser}</p>
          <br />
          <div className="profilleInformations">
            <p>
              <GithubLogo size={16} />
              {user.gitUser}
            </p>
            <p>
              <Buildings size={16} />
              {user.company}
            </p>
            <p>
              <Users size={16} />
              {user.followers} Seguidores
            </p>
          </div>
        </div>
      </ProfileContainer>
    );
  } else {
    return (
      <ProfileContainer>
        <h2>Cannot Load</h2>
      </ProfileContainer>
    );
  }
}
