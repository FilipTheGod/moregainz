import React from "react";
import styled from "styled-components";
import BodyPartImage from "../assets/images/bodyPart.png";
import TargetImage from "../assets/images/target.png";
import EquipmentImg from "../assets/images/equipment.png";
const ExerciseDetail = ({ exerciseDetail }) => {
  const { bodyPart, equipment, gifUrl, name, target } = exerciseDetail;
  const ExtraDetails = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImg,
      name: equipment,
    },
  ];
  return (
    <div className="w-11/12 flex justify-between my-12 mx-auto py-8 px-12 gap-24 rounded-lg shadow-lg shadow-gray-500 md:flex-col md:p-8 md:gap-8 md:my-12 md:mx-auto ">
      <div className="w-3/5 flex justify-center items-center md:m-auto">
        <img src={gifUrl} alt={name} loading="lazy" className="w-full" />
      </div>
      <div className="flex flex-col content-center justify-center">
        <h3 className="mt-8 font-bold capitalize text-4xl">{name}</h3>

        <p className="mt-4 text-xl font-medium text-gray-900">
          Exercises keep you strong.{" "}
          <strong style={{ color: "#1460e5" }}>{name}</strong> is the one of the
          best exercises to target your{" "}
          <strong style={{ color: "#1460e5" }}>{target}</strong>. It will help
          you to improve your mood and gain energy.
        </p>
        {ExtraDetails.map((item) => (
          <div key={item} className="mt-8 flex gap-8 items-center">
            <div className="w-16 h-16 bg-gray-100 flex justify-center items-center p-4 rounded-lg shadow-gray-500 hover:bg-blue-700">
              <img className="w-full" src={item.icon} alt={item.name} />
            </div>
            <p className="text-2xl capitalize text-gray-900">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const DetailCard = styled.div`

  @media screen and (min-width: 520px) and (max-width: 768px) {
    .content {
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      padding: 0 1rem;

      .heading {
        margin: 0;
      }

      .muscleDetail {
        div {
          width: 60px;
          height: 60px;
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 500px) {
    margin: 3rem auto;
    flex-direction: column;

    padding: 0.5rem;
    gap: 2rem;

    .image {
      margin: auto auto;
    }
    .content {
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      padding: 0 0.7rem;
      margin-bottom: 1.5rem;

      .heading {
        margin: 0;
        font-size: 1.6rem;
      }
      .discription {
        font-size: 1.2rem;
      }
      .muscleDetail {
        div {
          width: 50px;
          height: 50px;
        }
        p {
          font-size: 1.2rem;
        }
      }
    }
  }
`;
export default ExerciseDetail;