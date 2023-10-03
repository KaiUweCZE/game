import UserApi from '../services/api'

export const useCompleteCampaign = (username) => {
    const completeCampaign = (campaignName) => {
        var data = {
            username,
            campaignName
        }
        UserApi.nextCampaign(data)
        .then(res => 
            console.log("Completed!"))
        .catch( err => {
            console.error(err);
        })
    }

    return { completeCampaign }
}

export const isCampaignCompleted = (username, campaignName) =>{
    var data = {
        username,
        campaignName
    }
    return UserApi.checkCampaign(data)
    .then(res => {
        console.log(res.data.message);
        if (res.data.message === "Campaign is completed") {
            return true
        } else{
            return false;
        }
    })
    .catch(err => {
        console.error(err);
        return false
    })
}